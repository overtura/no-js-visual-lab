# AGENTS.md

## Project goal
이 저장소는 최신 HTML/CSS만으로 인터랙티브 UI를 만드는 overtura 실험 저장소다. 앱 런타임에는 JavaScript를 넣지 않는다.

## Commands
- install: `pnpm install`
- dev: `pnpm dev`
- lint: `pnpm lint`
- build: `pnpm build`
- full check: `pnpm check`
- self-improve context: `pnpm self-improve:context`
- self-improve guard: `pnpm self-improve:guard`

## Done definition
- 화면 문구는 기본적으로 한국어다.
- `index.html`과 build output에 런타임 `<script>`가 없다.
- 핵심 HTML/CSS-only interaction이 실제로 동작한다.
- PR 요약에 검증 결과가 있다.

## Review guidelines
- JavaScript 추가 요청은 먼저 의도를 확인한다.
- no-JS 제약, 접근성, 깨진 layout, 과한 workflow 권한 상승을 우선 지적한다.
- self-improve 변경은 민감 정보 guard와 `pnpm check` 통과 여부를 먼저 본다.
