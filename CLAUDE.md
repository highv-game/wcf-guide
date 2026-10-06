# wcf-guide

WoW Forever(클래식 포에버) 개인 공략 사이트. MkDocs Material, main 브랜치에 push하면 GitHub Actions가 GitHub Pages로 배포한다.

## 업데이트 규칙
- 내용은 한국어, 스펠·지역 이름은 한국 클라이언트 기준. 확인 못 한 이름은 영문 그대로 두고 "미확인"이라고 적는다.
- 직업 문서는 `docs/classes/`, 레벨링은 `docs/leveling/`, 독립 HTML 도구는 `docs/tools/`.
- 새 페이지는 `mkdocs.yml`의 `nav`에 추가한다.
- 문서를 고치면 두 번째 줄의 `> 최종 수정: YYYY-MM-DD`를 갱신하고 `docs/changelog.md` 맨 위에 한 줄 추가한다.
- 단축키 규칙(3줄 배치: 기본 바 / 한 칸 위 Ctrl+숫자·Shift+알파벳 / 두 칸 위 Alt, 공용 5번 바, Shift+숫자·Ctrl+알파벳 금지)은 `docs/index.md`에 있다.
- 매크로·단축키 자동 설정 애드온은 별도 비공개 저장소 highv-game/wcf-setup(`WcfSetup/Profiles/`)에 있다. 직업 프로필을 만들거나 고치면 그 직업 페이지의 `## 단축키와 매크로`도 같은 배치로 고친다.
- push 전 `mkdocs build --strict`가 통과해야 한다.
- 페이지에는 지금 쓰는 방법만 적는다. 예전 방식, 바꾼 이유 같은 변경 내력은 넣지 않는다(내력은 `docs/changelog.md`에만).
- 출처·인용 문구는 넣지 않는다. 공략 사이트 형식: 맨 위 `!!! abstract "한눈에 보기"`, 팁/미확인은 admonition, 마지막은 `## 게임에서 확인할 것` 체크리스트(`- [ ]`).
- `/way` 좌표와 슬래시 명령은 인라인 코드로 쓴다(클릭하면 복사되고 "복사됨" 알림이 뜬다). 좌표는 해당 NPC·장소 이름 바로 옆에 둔다. 단계 끝이나 페이지 아래에 웨이포인트를 따로 모아두지 않는다. 매크로는 코드 블록.
