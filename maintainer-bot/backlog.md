# No-JS Visual Lab Maintainer Bot Backlog

중앙 control plane은 `okorion/self-improving-maintainer-bot`이다. 런타임 JavaScript를 추가하지 않는다.

## 운영 검증
- 모든 변경은 `pnpm check`를 통과해야 한다.
- 문서 QA 기준은 `maintainer-bot/evals/docs_qa.jsonl`에 두고, 실패 case가 없으면 no-op 또는 낮은 위험 문서 정리를 우선한다.
- 자동 merge 기본값은 꺼져 있다.
- `.github/workflows/**`, credential, auth/security, infra, migration 변경은 R3로 취급하고 draft/proposal only로 다룬다.

## R0 Report
- no-JS 데모 추가 기준과 지원 브라우저 fallback 기준을 분석 리포트로 정리한다.
- 최신 CSS 기능별 분류 체계의 빈 부분을 정리한다.

## R1 PR 후보
- HTML/CSS만으로 가능한 작은 새 데모 섹션을 추가한다.
- 기존 데모의 설명 문구를 더 구체적인 한국어로 개선한다.
- 밝은 디자인 시스템 토큰을 유지하면서 데모 카드의 대비와 간격을 개선한다.

## R2 Draft 후보
- build tooling, dependency, lint script 변경은 draft PR로만 제안한다.

## R3 Proposal only
- workflow, credential, security, infra, migration 관련 변경은 코드 변경 없이 proposal로만 다룬다.
