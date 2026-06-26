# No-JS Visual Lab

JavaScript 없이 최신 HTML과 CSS 기능만으로 인터랙티브 UI를 만드는 실험실입니다. 런타임 `<script>` 없이 popover, details accordion, `:has()`, container query, cascade layer를 조합합니다.

## 목적
- 브라우저 기본 기능만으로 만들 수 있는 UI 패턴을 축적한다.
- no-JS 제약을 CI에서 검증한다.
- self-improving bot이 새 데모, 문서, workflow 개선을 자동 PR로 제안하고 merge한다.

## 사용자 flow
1. 메인 화면에서 HTML/CSS-only 데모를 살펴본다.
2. popover, accordion, CSS 상태 카드가 JavaScript 없이 동작하는지 확인한다.
3. 새로운 데모는 self-improve workflow가 작은 PR로 추가한다.

## 실행 방법
```bash
pnpm install
pnpm dev
```

## 검증
```bash
pnpm check
```

`pnpm check`는 source와 build output 모두에서 `<script>`와 inline event handler가 없는지 검사한다.

## 자가 개선
```bash
pnpm self-improve:context
pnpm self-improve:guard
```

## 디자인 시스템
- 기준 문서: `DESIGN.md`
- 실행 토큰: `design-system/base.css`
- 참고 기록: `docs/design/`

## 범위 밖
- 런타임 JavaScript
- 프레임워크 기반 컴포넌트
- 실제 secret 또는 credential 저장
