# 스카이본 드루이드 1\~20 가이드 (포에버)

> 최종 수정: 2026-09-29

## 개요

얼라이언스 스카이본(고등 마법원 스카이본) 드루이드는 제프라스 섬에서 1\~12레벨을 보내고, 달라란을 거쳐 스톰윈드로 넘어와 동부 왕국에서 20레벨까지 올린다. 특성·기술·장비는 나이트 엘프 드루이드와 같고, 다른 건 시작 지역, 곰 변신 퀘스트, 종족 특성, 변신 모습이다. WoW Forever는 11월 4일 정식 출시 예정이고, 베타는 현재 20레벨 제한(10월 1일경 30)이다.

| 종족 특성 | 효과 |
| --- | --- |
| 공중 걷기 | 10초 동안 방향을 조종하며 활공해 내려간다. 쿨 2분 |
| 바람의 축복 (지속) | 근접·원거리·주문 가속 +1% |
| 정령의 통찰 (지속) | 정령에게 주는 피해 +5% |
| 지맥 읽기 (얼라이언스 전용) | 생명력·마나 회복 속도 +100%. 지맥 근처면 15분, 그 외에는 15초. 2초 시전, 쿨 2분 |

- 종족 특성 이름은 블리자드 한국 공식 공지 표기다. 지맥은 지도에 보라색 원 아이콘으로 보이고, 주로 폐허·선돌·돌기둥 근처에 있다. 전투 밖에서 지맥 위에 서서 쓴다.
- 나이트 엘프와 비교하면 회피·은신 보너스는 없지만, 가속 1%와 회복 버프가 있어 쉬는 시간이 짧다. 언어는 다르나서스어다.
- 변신 모습은 하늘색 깃털과 부리가 있는 새 혼합형이다. 고은 새-고, 표범은 새-표범, 치타 변신은 땅을 달리는 새 모습이다.
- 무기: Forever에서는 곰·표범 피해가 무기 DPS를 따라간다. 클래식과 달라서 무기가 가장 중요한 장비다. 시작 무기와 무기 숙련은 스카이본 기준으로 확인되지 않았다(보통 드루이드는 지팡이·둔기).
- 방어구: 가죽. 스탯 규칙(레벨업 기준)은 무기 DPS > 민첩 > 힘 > 체력 > 지능이다. Forever는 적중과 치명타가 각각 하나의 스탯으로 합쳐졌다.
- 가시는 걸 때의 주문력을 저장한다. 던전에서는 주문력 장비로 가시를 걸고 다시 야성 장비로 바꾼다.
- 공통 변경: 자연의 손아귀와 청명의 전조가 기본 기술이 됐고, 12레벨에 전투 밖 부활 주문(Revive)이 생겼다. 변신 중에도 물약·차를 쓸 수 있다.

출처: [블리자드 스카이본 공지(한국어)](https://worldofwarcraft.blizzard.com/ko-kr/news/24302071), [Icy Veins 스카이본](https://www.icy-veins.com/wow-forever/skyborne-race-guide), [Wowhead 스카이본 드루이드 변신](https://www.wowhead.com/forever/news/skyborne-druid-forms-in-wow-forever-382861), [Wowhead 지맥 읽기](https://www.wowhead.com/forever/spell=1259705/read-ley-line), [ForeverChanges 드루이드 변경점](https://foreverchanges.pro/class/druid)

## 특성 빌드 (1\~20레벨)

20레벨까지 11포인트를 전부 야성에 넣는 0/11/0 빌드를 추천한다. 특성은 종족과 상관없어서 나이트 엘프 드루이드와 같다. 곰과 표범이 같은 야성 트리를 쓰기 때문에 탱커와 근접 딜러를 둘 다 할 수 있다. 특성 포인트는 10레벨부터 레벨당 1개씩 받고, 5포인트마다 다음 단이 열린다.

```mermaid
flowchart LR
    A["10~14<br/>야수의 본성 5/5"] --> B["15~16<br/>살쾡이의 기민함 2/2"]
    B --> C["17~18<br/>야수의 습격 2/2"]
    C --> D["19<br/>야생의 본능 1/3"]
    D --> E["20<br/>야성의 돌진 1/1"]
```

| 레벨 | 특성 | 효과 |
| --- | --- | --- |
| 10\~14 | [야수의 본성](https://foreverchanges.pro/talents/druid) 5/5 (1단) | 후려치기·휘둘러치기·할퀴기·갈퀴 발톱 등 기술 비용 1씩 감소(랭크당). 곰 구간 분노 부족을 해결한다 |
| 15\~16 | [살쾡이의 기민함](https://foreverchanges.pro/talents/druid) 2/2 (2단) | 회피 +2%(랭크당). 20레벨 표범 변신부터 이동속도 +30%가 붙는다 |
| 17\~18 | [야수의 습격](https://foreverchanges.pro/talents/druid) 2/2 (2단) | 강타 기절 +0.5초, 재사용 대기 -15초(랭크당). 시전 몹 차단용 |
| 19 | [야생의 본능](https://foreverchanges.pro/talents/druid) 1/3 (2단) | 휘둘러치기 피해 +10%, 은신 들킬 확률 감소 |
| 20 | [야성의 돌진](https://foreverchanges.pro/talents/druid) 1/1 (3단) | 곰 상태로 돌진해 4초 이동 불가 + 주문 차단 |

특성 이름은 Wowhead 한글판(클래식) 이름이다.

- 빌드는 [Icy Veins 20레벨 야성](https://www.icy-veins.com/wow-forever/feral-druid-melee-dps-and-tank-pve-guide) 기준이다.
- 탱커 위주라면 야수의 습격 2 + 야생의 본능 1 대신 두꺼운 가죽 3(곰 방어도 증가)을 찍어도 된다. 가이드 사이트 빌드가 아니라 특성 효과를 보고 제안한 변형이다.
- 레거시(Legacy)의 Talented 특전을 찍으면 9레벨부터 특성을 받아 최대 3점을 더 쓸 수 있다. 남는 점수는 야생의 본능 3/3이나 야생의 정수에 넣는다.
- Forever에서 자연의 손아귀(10레벨)와 청명의 전조(20레벨)는 특성이 아니라 기본 기술이 됐다.

### 21\~30레벨 계획

- 21\~22: 날카로운 발톱 2/2. 곰·표범 치명타 +6%
- 23\~24: 맹렬한 격노 2/2. 할퀴기·갈퀴 발톱·후려치기·휘둘러치기 피해 +10%
- 25: Primal Bite 1/1 (4단, 신규)
- 26\~28: 야생의 포식자 3/3. 곰·표범 전투력 증가
- 29: 야생의 정수 1/5
- 30: Leader of the Pack 1/1 (5단). 파티 전원 치명타 +3%

### 힐러(회복) 빌드

던전에서 힐러를 주로 맡을 거면 11포인트를 전부 회복에 넣는 0/0/11 빌드를 추천한다. 회복 특성은 혼자 사냥이 느리니, 레벨업은 야성으로 하고 힐러로 던전에 갈 때 특성을 초기화하는 방법도 있다.

```mermaid
flowchart LR
    A["10~14<br/>Naturalist 5/5"] --> B["15~19<br/>자연의 정신 집중 5/5"]
    B --> C["20<br/>묵상 1/3"]
```

| 레벨 | 특성 | 효과 |
| --- | --- | --- |
| 10\~14 | Naturalist 5/5 (2단) | 치유의 손길 시전 시간 -0.1초, 모든 피해 +1%(랭크당). 주력 힐이 0.5초 빨라진다 |
| 15\~19 | 자연의 정신 집중 5/5 (1단) | 맞으면서 힐할 때 시전이 밀리지 않을 확률 +70% |
| 20 | 묵상(Reflection) 1/3 (3단) | 주문을 시전하는 동안에도 마나 회복의 17%가 이어진다 |

- 이 빌드는 Wowhead가 부르는 'Reflective' 빌드다. 찍는 순서는 가이드에 없어 효과를 보고 정했으니 1·2단은 순서를 바꿔도 된다. Naturalist는 Forever에서 효과가 바뀐 특성이라 한글 이름이 확인되지 않았다.
- 대안으로 11포인트를 조화 트리에 넣어 Nature's Splendor(회복·재생 지속 시간 증가)를 찍는 'Splendid' 빌드도 있다. 힐과 딜을 반씩 할 때 쓴다.
- 레거시의 Talented 특전이 5/5면 20레벨에 신속한 치유(4단)까지 닿는다. Wowhead는 이걸 20레벨 최고 힐러 빌드로 본다.
- 스탯 우선순위: 치유량(주문력) > 정신력 > 지능 > 치명타 > 체력. 야성 장비와 스탯이 완전히 다르니 힐러를 자주 하려면 힐 장비를 따로 챙긴다.
- 스카이본은 힐러에 잘 맞는다. 지맥 읽기(마나 회복 +100%)가 정신력·묵상과 같이 작동해 풀링 사이 마나가 빨리 찬다.

던전 힐 운영 순서:

1. 탱커에게 가시와 회복을 유지한다.
2. 힐할 게 없으면 시전을 멈춘다. 5초간 주문을 안 쓰면 마나가 빨리 찬다.
3. 빠른 힐은 재생, 재생이 이미 걸려 있으면 치유의 손길을 쓴다.
4. 청명의 전조가 켜지면 가장 높은 랭크 힐에 쓴다.
5. 마나가 넉넉하면 달빛 섬광·천벌로 딜을 보태고, 위험한 풀링에는 휘감는 뿌리로 몹을 묶는다.

21\~30레벨 힐러 계획:

- 21\~22: 묵상 3/3
- 23\~24: 자연의 선물 2/5 (모든 치유 +2%씩)
- 25: 신속한 치유 1/1 (4단). 회복·재생이 걸린 대상을 즉시 치유
- 26\~28: 회복 연마 3/3 (회복 효과 +5%씩)
- 29: 자연의 선물 3/5
- 30: 자연의 신속함 1/1 (5단). 다음 자연 주문 즉시 시전, 위급용

야생 성장(파티 전체 지속 치유, Forever 신규)은 회복 트리 맨 아래(7단)라 30레벨 이후 목표다. 21\~30 계획은 가이드 출처 없이 특성표를 보고 짠 순서다.

힐러 빌드 출처: [Wowhead 20레벨 회복](https://www.wowhead.com/forever/guide/classes/druid/restoration/level-20-healer-overview), [Leprestore 회복 드루이드](https://leprestore.com/guides/world-of-warcraft-forever/wow-forever-restoration-druid-guide-best-builds-rotation-race-professions/)

출처: [ForeverChanges 드루이드 특성](https://foreverchanges.pro/talents/druid), [Icy Veins 야성](https://www.icy-veins.com/wow-forever/feral-druid-melee-dps-and-tank-pve-guide), [Mobalytics 야성](https://mobalytics.gg/wow-forever/classes/feral-druid-guide)

## 추천 매크로

/cast, /startattack 같은 명령어와 \[stance:1\] 같은 조건은 영어 그대로 쓰고, 주문 이름만 한글로 넣는다. 드루이드의 태세 번호는 배운 변신 순서대로 붙는다. 20레벨에 세 형태를 다 배우면 1 곰 변신, 2 바다표범 변신, 3 표범 변신이다. 바다표범 변신을 안 배웠다면 표범은 2번이니 아래 매크로의 3을 2로 바꾼다. 스카이본은 변신 모습만 다르고 주문 이름은 같다.

곰 돌진 풀링 (곰이 아니면 곰으로 변신, 곰이면 야성의 돌진):

```
#showtooltip
/cast [nostance:1] 곰 변신; [@mouseover,harm,nodead][] 야성의 돌진
```

후려치기 + 자동 공격 (Shift를 누른 채 누르면 휘둘러치기):

```
#showtooltip
/startattack
/cast [mod:shift] 휘둘러치기; 후려치기
```

마우스오버 포효 (도발):

```
#showtooltip
/cast [@mouseover,harm,nodead][] 포효
```

마우스오버 강타 (시전 차단용 기절):

```
#showtooltip
/cast [@mouseover,harm,nodead][] 강타
```

표범 + 은신 (한 번 누르면 표범, 다시 누르면 숨기):

```
#showtooltip
/cast [nostance:3] 표범 변신; [nostealth] 숨기
```

변신 풀고 힐 (마우스가 파티원 위면 그 사람, 아니면 나):

```
#showtooltip
/cancelform
/cast [@mouseover,help,nodead][@player] 회복
```

- 변신은 마나를 많이 쓴다. 전투가 끝난 뒤 힐을 넣고, 곰으로 싸우는 동안 마나를 채운다.
- 표범 변신, 숨기, 할퀴기, 도려내기는 20레벨 직업 퀘스트를 끝내야 배운다. 그 전에는 곰 매크로만 쓴다.
- 종족 기술 공중 걷기·지맥 읽기는 공식 공지 이름이다. 매크로에 넣을 때 이름이 안 먹으면 매크로 창을 연 채 주문서에서 Shift+클릭해 넣는다.

키 배치 예 (곰): 후려치기 1, 휘둘러치기 2, 위협의 포효 3, 강타 4, 분노 5, 포효 Q, 야성의 돌진 E. 매크로 문법은 [포에버 매크로 교본](../tools/macro-guide.html)에 자세히 있다. 기술 이름은 Wowhead 한글판(클래식)으로 대조했다.

## 장비 선택

야성 드루이드의 20레벨 목표 무기는 죽음의 폐광 미스터 스마이트가 떨구는 양손 둔기 Smite's Mighty Hammer다. Forever에서는 무기 DPS가 곰·표범 피해에 들어가서 무기부터 바꾼다. 방어구는 가죽이고 민첩·힘이 붙은 것을 고른다. 스카이본은 가속 +1%가 있어서 무기가 느려도 평타 횟수가 조금 늘어난다.

### 초반 (드랍 무기 전)

- 시작 무기를 쓰다가 퀘스트 보상 중 DPS가 가장 높은 지팡이나 둔기를 고른다.
- 8레벨쯤 경매장에서 초록 무기를 하나 사면 평타 DPS가 2에서 6 이상으로 오른다(Mobalytics).
- 드루이드는 단검·장착 무기·둔기·지팡이·양손 둔기를 쓸 수 있다. 양손 둔기는 아이언포지 무기 전문가에게 배운다(클래식 기준).
- 새 무기는 숙련도가 낮으면 빗나감이 많다. 바꾼 뒤 필드에서 숙련도를 올리고 던전에 간다.
- 가죽세공 Brawler's Leather 세트(머리·갑옷)가 경매장에 싸게 올라오면 산다.

### 20레벨 BiS (야성)

| 부위 | 아이템 | 얻는 곳 |
| --- | --- | --- |
| 무기 | Smite's Mighty Hammer (양손 둔기) | 죽음의 폐광, 미스터 스마이트 |
| 무기 (대안) | Segmented Spider Leg | 로데론의 폐허, 위더팡 |
| 머리 | Brawler's Leather Hood | 가죽세공 100 |
| 목 | Erudite's Amulet | 퀘스트 Friend of the Library |
| 등 | Cape of the Brotherhood | 죽음의 폐광, 에드윈 밴클리프 |
| 가슴 | Tunic of Westfall | 퀘스트 데피아스 형제단 (서부 몰락지대) |
| 허리 | Blackened Defias Belt | 죽음의 폐광, 그린스킨 선장 |
| 다리 | Duty Bound Leggings | 퀘스트 Bloodied Insignia (로데론의 폐허) |
| 손목 | Witherbite Bracers | 로데론의 폐허, 위더팡 |
| 반지 | First Mate Band | 죽음의 폐광, 미스터 스마이트 |
| 장신구 | Lookie's Spyglass | 죽음의 폐광, 쿠키 |
| 유물 (신규 칸) | Mystic Mushroom | 마법부여 제작 또는 퀘스트 |

- ForeverChanges 원본 BiS는 어깨·손·다리·발을 통곡의 동굴 송곳니 세트로 채운다. 통곡의 동굴은 불모의 땅에 있어 얼라이언스 동선에서 멀어서, 위 표는 가까운 던전 위주로 바꿨다.
- 영주의 전당에서는 Golemheart Stave(플런더), 가죽 장갑 Flamefist Grips, 가죽 다리 Direhammer Leggings가 야성에 쓸 만하다.
- 가시는 걸 때의 주문력을 저장한다. 탱커는 주문력 장비 몇 개를 따로 챙겼다가 가시를 걸 때만 입는다.
- 아이템 이름은 한글판 번역이 확인되지 않아 영문으로 적었다. 베타 초기 목록이라 순위·드랍처는 바뀔 수 있다.

출처: [ForeverChanges 드루이드 BiS](https://foreverchanges.pro/bis/druid), [Wowhead 20레벨 곰 탱커](https://www.wowhead.com/forever/guide/classes/druid/feral/level-20-tank-overview), [Wowhead 20레벨 야성 딜러](https://www.wowhead.com/forever/guide/classes/druid/feral/level-20-dps-overview)

## 1\~20 육성 루트

제프라스 섬(1\~12) → 달라란 → 스톰윈드 → 모단 호수·영주의 전당 → 서부 몰락지대·죽음의 폐광 → 붉은마루 산맥 순서가 기본이다. 곰 변신은 섬 안의 스카이본 전용 퀘스트로 배우고, 바다표범·표범 변신은 다르나서스에서 시작한다.

| 레벨 | 지역 | 할 일 |
| --- | --- | --- |
| 1\~3 | 제프라스 섬 Thendal Grove | 첫 퀘스트 Coming of Age. 큰 나무 안의 드루이드 조련사 Xyton Silverwind (A Student of Nature) |
| 3\~6 | Shen'dar Village | 산적 퀘스트, 교단 잠입 퀘스트(Falaath 여관 옷장 변장) |
| 6\~11 | Valanaar (고등 마법원 도시) | 의회·선돌 조사 퀘스트. 드루이드 조련사는 낚시 조련사 연못 위쪽 |
| 10 | Valanaar → Shen'dar Highlands | 곰 변신 직업 퀘스트 (아래 참고) |
| 11\~13 | Shrine of Akir | 섬 마무리 퀘스트 Making Our Move, Rohashi Spires에서 교단 대사제 Lorthuna 처치 |
| 12\~13 | Valanaar → 달라란 → 스톰윈드 | 남동쪽 부두의 비행선으로 달라란, 북쪽 부두 근처 차원문으로 스톰윈드. Child of Nature 퀘스트로 스톰윈드 드루이드 조련사 Sheldras Moontree에게 간다 |
| 13\~15 | 모단 호수 (텔사마르) | 깊은굴 지하철로 아이언포지. 모단 호수 퀘스트 |
| 15\~17 | 영주의 전당 | 아이언포지 지하 신규 던전. 퀘스트를 다 받고 한 번 |
| 16 | 다르나서스 → 달의 숲 | 바다표범 변신 직업 퀘스트 (선택) |
| 17\~19 | 서부 몰락지대 | 감시의 언덕 데피아스 줄기 받고 죽음의 폐광 |
| 19\~20 | 붉은마루 산맥 (레이크샤이어) | 남은 퀘스트 정리 |
| 20 | 다르나서스 → 달의 숲 | 표범 변신 직업 퀘스트 |

### 스카이본 드루이드 직업 퀘스트

- **10레벨 곰 변신 (스카이본 전용)**: Valanaar 드루이드 조련사에게 The Great Ursera Spirit를 받아, Shrine of Akir 아래 폭포 근처의 드루이드를 만난다. 이어지는 [Strength and Mercy](https://www.wowhead.com/forever/quest=94638/strength-and-mercy)는 Shen'dar Highlands에서 미쳐버린 짝 Ur'endra를 잡는 퀘스트다. Valanaar에서 서쪽으로 가 통나무 다리를 건너고, 안개 낀 동굴이 아니라 산 위쪽 산비탈에 있다. 보상은 곰 변신이다.
- **주의**: 나이트 엘프용 달의 숲 퀘스트(Dendrite Starblaze)를 받으면 스카이본에게는 다음 단계가 없다. 곰 변신은 Valanaar 조련사 퀘스트로 받고, 퀘스트가 안 보이면 접속을 다시 한다.
- **16레벨 바다표범 변신**: 다르나서스의 Mathrengyl Bearwalker에게서 시작한다. 스톰윈드 조련사는 이 퀘스트로 안내하지 않으니 직접 찾아간다. 이후 단계는 나이트 엘프와 같은 달의 숲 호수·바다사자 시험 줄기로 보이지만 스카이본 기준으로는 확인되지 않았다. 이동이 길어서 20레벨 표범 퀘스트와 묶어 하는 것도 방법이다.
- **20레벨 표범 변신**: Mathrengyl → 달의 숲 순서는 같고, 스카이본은 쌍둥이 다리 남쪽의 Avatar of Saeyleenan에게 [The Great Windborne Cat Spirit](https://www.wowhead.com/forever/quest=98341/the-great-windborne-cat-spirit)를 받는다. 호수 동쪽 스톰레이지 지하굴(71.2, 61.5)에서 유물 3개를 모으고 다르나서스로 돌아가면 표범 변신·숨기·할퀴기·도려내기를 배운다. 유물은 파티 공유라 기다리는 드루이드와 파티를 맺는다.
- **달의 숲 순간이동**: 스카이본도 배울 수 있지만 보통 경로의 퀘스트가 빠져 있다. 달라란 비행 조련사 근처 퀘스트 NPC에게서 받을 수 있다는 제보가 있다(한 곳에서만 확인).
- **알려진 버그 (베타)**: Curing the Sick 퀘스트를 끝내도 해독을 못 배우는 경우가 있고, 세나리온 자치회 평판이 낮아 일부 후속 퀘스트가 막히는다는 제보가 있다.

### 드루이드 육성 팁

- 1\~9레벨은 천벌 연타가 가장 빠르다. 마나가 모자라면 지맥 읽기를 켜고 쉬면 회복이 두 배다. 지맥 위라면 15분 동안 유지된다.
- 10\~19레벨은 곰으로 사냥한다. 몹이 다가오기 전에 천벌·달빛 섬광을 한두 번 쏘고 곰으로 변신한다.
- 제프라스 섬에서 나가면 돌아오기 어렵다. 섬의 퀘스트와 곰 변신 퀘스트를 끝내고 떠난다.
- 약초 채집을 같이 올릴 때는 모단 호수·서부 몰락지대·붉은마루 산맥 약초를 캔다. 자세한 위치는 [약초 지도](../tools/herb-atlas.html)에 있다.
- Forever는 던전 몹 경험치가 줄고 던전 퀘스트 경험치가 늘었다. 던전은 퀘스트를 다 받은 상태로 한 번 도는 게 핵심이다.

제프라스 섬의 지명·NPC·퀘스트 이름은 한글판 표기를 확인하지 못해 영문으로 적었다. 섬 안 레벨 구간은 가이드 한 곳(ForeverWisp) 기준이다.

출처: [ForeverWisp 스카이본 레벨업](https://www.foreverwisp.com/guides/wow-forever-alliance-skyborne-leveling-guide), [Warcraft Tavern 제프라스 섬에서 아이언포지 가기](https://www.warcrafttavern.com/forever/guides/how-to-get-to-ironforge-from-the-zephras-isle/), [블리자드 포럼 스카이본 드루이드 퀘스트 버그](https://us.forums.blizzard.com/en/wow/t/bug-missing-quests-skyborne-druid-class-quests/2355854), [블리자드 포럼 곰 변신](https://us.forums.blizzard.com/en/wow/t/skyborne-level-10-druid-bear-form/2354273), [ForeverChanges 표범 변신 퀘스트](https://foreverchanges.pro/druid-cat-form)

## 던전

20레벨까지 갈 던전은 영주의 전당, 죽음의 폐광, 로데론의 폐허 세 곳이다. 스카이본은 스톰윈드·아이언포지에서 레벨업하므로 영주의 전당과 죽음의 폐광이 동선에 바로 걸린다. 검은심연의 나락은 Forever에서 24\~32레벨로 올라가 30 개방 뒤에 간다.

| 던전 | 레벨 | 위치 | 가는 법 |
| --- | --- | --- | --- |
| 영주의 전당 (Forever 신규) | 13\~18 | 아이언포지 지하(옛 아이언포지) | 스톰윈드 → 깊은굴 지하철 → 아이언포지 왕좌에서 아래로 내려가 바닥의 차원문 |
| 죽음의 폐광 | 17\~26 (일부 Forever 자료는 15\~22) | 서부 몰락지대 문브룩 | 스톰윈드 → 서부 몰락지대 남쪽 |
| 로데론의 폐허 (Forever 신규) | 15\~20 (Wowhead는 16\~22) | 티리스팅 숲 언더시티 위 폐허 | 메네스됬 → 힐스브래드 → 로데르미어 호수를 헤엄쳐 티리스팅. 호드 지역이라 멀고 위험하다 |

영주의 전당은 드워프 전사 문서에서 '왕들의 전당'이라고 적었던 곳이다. 한국 커뮤니티(인벤) 표기를 따랐다.

### 파티 구성

기본은 탱커 1, 힐러 1, 딜러 3이고, 드루이드는 어느 자리든 들어갈 수 있다.

- **곰 탱커 (추천)**: 탱커가 가장 부족해서 파티가 가장 빨리 찬다. 힐러는 사제를 추천한다. 영주의 전당과 로데론의 폐허는 언데드가 많아 언데드 속박이 쓸모 있다.
- **표범 딜러 (20레벨부터)**: 전사 탱커 + 사제 힐러 파티에 들어간다. 야생의 징표·가시를 돌리고, 힐러가 죽으면 변신을 풀고 보조 힐을 한다.
- **힐러**: 야성 특성이라도 20레벨 던전은 회복·재생·치유의 손길로 버틸 수 있다. 지맥 읽기로 풀링 사이 마나 회복이 빠르다.
- 가죽 장비는 도적과 같이 쓴다. 파티를 짤 때 주사위 규칙을 먼저 말해둔다.

### 영주의 전당 퀘스트와 보스

들어가기 전에 옛 아이언포지에서 Important Heirlooms(Thom Filch), The Restless Dead(Afadra Dunwall)를 받는다. 던 모로의 Earthseer Farsen이 주는 Old Ironforge Incursion과, 안에서 받는 An Ancient Grudge, The Treaty of Understanding까지 챙긴다.

| 보스 | 곰 탱커가 할 일 | 야성 드랍 |
| --- | --- | --- |
| 파람드림 앤빌마 | 후려치기·평타로 어그로를 확실히 잡는다 | - |
| 마그마투스 | 소환사와 같이 나온다. 야성의 돌진·강타로 시전을 끊는다. 마그마투스가 정령이면 정령의 통찰 +5%가 적탁된다 | Fang of Magmatus (민첩 단검) |
| 플런더 | 넉백이 있어 벽을 등지고 탱한다 | Golemheart Stave (지팡이) |
| 두르겐 더지해머 | 돌 골렘 2마리를 휘둘러치기로 잡는다. 공포 후 바로 포효로 되잡는다 | - |

### 죽음의 폐광 탱킹 포인트

- 가기 전에 감시의 언덕에서 데피아스 형제단 퀘스트 라인을 받는다. 마지막 보상은 가죽 가슴 Tunic of Westfall을 고른다.
- 스니드: 벌목기를 부수면 스니드가 내리는데 바로 포효로 다시 잡는다.
- 미스터 스마이트: 목표 무기를 떨구는 보스다. 은신한 경비병 2마리를 먼저 잡고, 무기 교체 때 파티가 기절하니 체력을 여유 있게 둔다.
- 에드윈 밴클리프: 한꺼번에 큰 피해가 들어오니 분노는 아꼈두고 위협의 포효를 유지한다.

### 로데론의 폐허

- 얼라이언스 퀘스트 4개는 모두 던전 안에서 받는다.
- 보스는 Witherfang, The Baron, Viktor the Vile, The Abandoned, Bjork, Rath'mael 순이다.
- 야성 드랍: Witherfang의 Segmented Spider Leg(무기)와 Witherbite Bracers(가죽 손목), Viktor의 Bloodied Chestwraps(가죽 가슴).

### 곰 탱커 셋팅과 플레이

| 항목 | 셋팅 | 비고 |
| --- | --- | --- |
| 풀링 | 천벌·달빛 섬광으로 당기고 곰 변신, 20부터는 야성의 돌진 | 자연의 손아귀를 미리 켜둔다 |
| 단일 대상 | 위협의 포효 → 후려치기 반복 | 분노가 모자라면 분노 사용 |
| 여러 마리 | 휘둘러치기 + 마우스오버 포효 | 변이 걸린 몹이 있으면 휘둘러치기 대신 후려치기 |
| 차단 | 강타, 야성의 돌진 | 시전 몹에 아끼다 |
| 위급 | 변신 풀고 회복·재생 | 변신하면 분노가 사라지니 마지막 수단 |

- 후려치기·휘둘러치기 피해는 작고 평타와 가시가 피해·위협의 대부분이다. 무기가 좋을수록 탱도 쉬워진다.
- 풀링 전에 해골과 가위(변이) 표시를 한다. 표식 달기 매크로(해골은 그냥, 가위는 Shift, 달은 Ctrl):

```
/tm [mod:shift] 7; [mod:ctrl] 5; 8
```

출처: [Wowhead 영주의 전당](https://www.wowhead.com/forever/guide/hall-of-thanes-dungeon-overview-location-rewards), [Wowhead 로데론의 폐허](https://www.wowhead.com/forever/guide/ruins-of-lordaeron-dungeon-overview-location-rewards), [Warcraft Tavern 던전 목록](https://www.warcrafttavern.com/forever/guides/dungeons/), [Wowhead 20레벨 곰 탱커](https://www.wowhead.com/forever/guide/classes/druid/feral/level-20-tank-overview)

## 추천 전문기술

약초 채집용 부캐라면 약초채집 + 연금술이 가장 좋다. 캔 약초를 바로 물약으로 만들고, Forever에서는 드루이드가 변신 중에도 물약을 마실 수 있다.

| 조합 | 장점 | 추천 대상 |
| --- | --- | --- |
| 약초채집 + 연금술 | 물약을 직접 만들고, 남는 약초는 판다 | 약초 부캐의 기본 조합 |
| 약초채집 + 무두질 | 둘 다 채집이라 경매장에 팔아 돈을 모은다 | 본캐 재료 공급, 초반 골드 |
| 무두질 + 가죽세공 | Brawler's·Defender's 가죽 장비를 직접 만든다 | 드루이드를 본캐로 키울 때 |

- 스카이본의 공중 걷기는 절벽·산에서 내려가며 약초로 바로 가는 지름길이 된다. 봉우리 약초를 캐고 내려올 때 쓴다.
- Forever 약초채집은 채집할 때 씨앗(4등급)과 희귀 재료가 추가로 나온다. 약초채집 20에 모닥불 옆 지능 +25 버프를 주는 Incense Candle, 140에 씨앗을 심어 약초를 키우는 Greenhouse를 만든다.
- 표범 은신(숨기)과 살쾡이의 기민함 이동속도 +30%로 몹을 피해 약초까지 간다. 30레벨 치타 변신(+40%)부터는 더 빨라진다. 치타 변신 상태로 약초를 캔다는 주장은 한 곳(Warcraft Tavern)에서만 확인됐다.
- 요리는 보조로 꼭 올린다. Forever 신규 모닥불 시스템에서 요리로 모닥불을 피우고 옆에 전문기술 효과를 두면 버프를 받는다.
- 전문기술 150·225·300 달성은 레거시 포인트를 준다.

약초별 위치와 가격은 [약초 지도](../tools/herb-atlas.html)에 있다.

출처: [Wowhead 약초채집](https://www.wowhead.com/forever/guide/professions/herbalism/overview-leveling), [ForeverChanges 약초채집](https://foreverchanges.pro/professions/herbalism), [Warcraft Tavern 드루이드](https://www.warcrafttavern.com/forever/guides/druid/)
