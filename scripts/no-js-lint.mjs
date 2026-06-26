import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const distOnly = process.argv.includes('--dist')
const targets = distOnly ? ['dist'] : ['index.html', 'styles.css']
const errors = []

function walk(path) {
  const stat = statSync(path)
  if (stat.isDirectory()) {
    for (const entry of readdirSync(path)) walk(join(path, entry))
    return
  }

  if (!/\.(html|css)$/i.test(path)) return
  const content = readFileSync(path, 'utf8')
  if (/<script[\s>]/i.test(content)) {
    errors.push(`${path}: 런타임 JavaScript <script> 태그가 포함되어 있습니다.`)
  }
  if (/on(click|input|change|submit|load|error)=/i.test(content)) {
    errors.push(`${path}: inline event handler가 포함되어 있습니다.`)
  }
}

for (const target of targets) {
  walk(join(root, target))
}

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(distOnly ? 'dist no-JS 검증 통과' : 'source no-JS 검증 통과')
