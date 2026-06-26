# AGENTS.md

## Project Goal
이 저장소는 최신 HTML/CSS만으로 인터랙티브 UI를 만드는 overtura 실험 저장소다. 런타임 JavaScript를 넣지 않고, self-improving bot이 안전한 PR 단위로 데모와 문서를 개선한다.

## Commands
- install: `pnpm install`
- dev: `pnpm dev`
- lint: `pnpm lint`
- build: `pnpm build`
- full check: `pnpm check`
- self-improve context: `pnpm self-improve:context`
- self-improve guard: `pnpm self-improve:guard`

## Done Definition
- 화면 문구는 기본적으로 한국어다.
- `index.html`과 build output에 런타임 `<script>`가 없다.
- 핵심 HTML/CSS-only interaction이 실제로 동작한다.
- PR 요약에 검증 결과가 있다.

## Review Guidelines
- JavaScript 추가 요청은 먼저 의도를 확인한다.
- no-JS 제약, 접근성, 깨진 layout, 과한 workflow 권한을 우선 지적한다.
- self-improve 변경은 민감 정보 guard와 `pnpm check` 통과 여부를 먼저 본다.

## Self-Improve Loop Rules
- 반복 루프는 작은 PR 하나로 끝나야 한다.
- `self-improvement/backlog.md`의 후보를 우선 활용한다.
- 런타임 JavaScript, 실제 secret, API key는 추가하지 않는다.

## External Design Tool Rules
- UI 작업 전 `DESIGN.md`, `design-system/base.css`, no-JS 검증 규칙을 먼저 읽는다.
- `portfolio-design-tools-integration-pack`과 외부 디자인 레퍼런스는 참고 자료이며 source of truth가 아니다.
- 외부 브랜드의 정확한 로고, 폰트, 고유 composition을 복제하지 않는다.
- token 또는 shared component contract 변경은 별도 design-system 성격의 PR로 분리한다.
