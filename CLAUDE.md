# wcf-guide

WoW Forever(클래식 포에버) 개인 공략 사이트. MkDocs Material, main 브랜치에 push하면 GitHub Actions가 GitHub Pages로 배포한다.

## 업데이트 규칙
- 내용은 한국어, 스펠·지역 이름은 한국 클라이언트 기준. 확인 못 한 이름은 영문 그대로 두고 "미확인"이라고 적는다.
- 직업 문서는 `docs/classes/`, 레벨링은 `docs/leveling/`, 독립 HTML 도구는 `docs/tools/`.
- 새 페이지는 `mkdocs.yml`의 `nav`에 추가한다.
- 문서를 고치면 두 번째 줄의 `> 최종 수정: YYYY-MM-DD`를 갱신하고 `docs/changelog.md` 맨 위에 한 줄 추가한다.
- 단축키 규칙(Shift+숫자 금지, Ctrl+1~4 마우스오버 치유, Alt+숫자 변형, Shift+알파벳 비전투)은 `docs/index.md`에 있다.
- push 전 `mkdocs build --strict`가 통과해야 한다.
- 출처·인용 문구는 넣지 않는다. 공략 사이트 형식: 맨 위 `!!! abstract "한눈에 보기"`, 팁/미확인은 admonition, 마지막은 `## 게임에서 확인할 것` 체크리스트(`- [ ]`).
- `/way` 좌표와 슬래시 명령은 인라인 코드로 쓴다(클릭 복사됨). 매크로는 코드 블록.
