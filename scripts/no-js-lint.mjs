import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const distOnly = process.argv.includes('--dist')
const targets = distOnly ? ['dist'] : ['index.html', 'styles.css']
const errors = []
const forbiddenPatterns = [
  {
    pattern: /<script[\s>]/i,
    message: '런타임 JavaScript <script> 태그가 포함되어 있습니다.',
  },
  {
    pattern: /on(click|input|change|submit|load|error)=/i,
    message: 'inline event handler가 포함되어 있습니다.',
  },
]

function walk(filePath) {
  const stat = statSync(filePath)
  if (stat.isDirectory()) {
    for (const entry of readdirSync(filePath)) walk(join(filePath, entry))
    return
  }

  if (!/\.(html|css)$/i.test(filePath)) return
  const content = readFileSync(filePath, 'utf8')
  for (const { pattern, message } of forbiddenPatterns) {
    if (pattern.test(content)) errors.push(`${filePath}: ${message}`)
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
