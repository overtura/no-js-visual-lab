# DESIGN.md - No-JS Visual Lab

## Product Intent
최신 HTML/CSS 기능만으로 구성한 한국어 UI 실험실이다. 사용자는 popover, details, `:has()`, container query 같은 기능을 런타임 JavaScript 없이 확인한다.

## Design Authority
우선순위는 접근성, no-JS 제약, 이 문서, CSS semantic token, 외부 디자인 참고 순서다. 외부 브랜드의 정확한 팔레트, 로고, 서체, composition은 복제하지 않는다.

## Visual Character
```txt
Clear
Native
Experimental
Readable
```

- light-first surface와 높은 readability를 유지한다.
- blue는 primary action, teal은 native capability, rose/amber는 state demo에 제한한다.
- 데모는 카드가 아니라 실험 bench처럼 보이게 한다.
- browser-default typography를 그대로 노출하지 않는다.

## Typography
- UI: Inter, Pretendard, system-ui
- Display: 44-92px
- Body: 18/31
- Control: 14/20, medium
- Code token: ui-monospace, 0.95em

## Layout
- Sticky header, hero, lab section rhythm을 유지한다.
- Section top border로 실험 단위를 구분한다.
- Container query demo는 자체 container 안에서만 layout 변형한다.

## Component Rules
- Button은 semantic action에만 사용한다.
- Popover/menu는 8px radius와 1px border를 사용한다.
- Details accordion은 native marker를 유지하되 spacing과 contrast를 보강한다.
- JS가 필요한 control을 추가하지 않는다.

## Interaction Model
```txt
Open native UI -> Inspect CSS state -> Add no-JS demo PR
```

## Anti-patterns
- runtime JavaScript
- framework component dependency
- floating card-heavy landing page
- 외부 브랜드 clone
