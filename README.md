# 목표는 취업이조 2팀
👉 [배포주소 바로가기](https://wanted-team2.netlify.app/)<br>
👉 [회고록 바로가기](https://velog.io/@suyeon-hong/3%EC%A3%BC%EC%B0%A8-%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9%EC%BD%94%EC%8A%A4-%ED%9A%8C%EA%B3%A0-2)

<br>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/3week_SearchFilter.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

<br>

## 🔥 프로젝트 과정 소개

| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52)| [반복 최소화](./styles/font.ts)|
| --- | --- |
| ![정보공유](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png) | ![반복 최소화](https://user-images.githubusercontent.com/68528752/154165034-04acc4b2-c218-4474-96b4-57841b0d1772.png) |


<br>


## 🏗 프로젝트 설계

#### 1. 검색 기능 debounce 적용
- [x] 콜백 함수의 불필요한 실행을 줄여주기위해 검색 기능에 `debounce` 적용
- [x] 불필요한 서버 리퀘스트를 막고, 불필요한 통신을 줄임과 동시에 필요 없는 렌더링 또한 막을 수 있음

#### 2. UI/UX
- [x] 데스크탑과 모바일 두 가지 버전의 레이아웃을 구성
- [x] `데스크탑` 버전에서는 넓은 스크린이라는 특성에 맞추어 많은 양의 데이터를 조회할 수 있도록  `페이지네이션` 추가<br> `브랜드 버튼`과 `제품 버튼`을 제공하여 항목별 검색가능
- [x] `모바일` 버전에서는 화면이 터치가능하다는 특성에 맞추어 `브랜드 태그`를 추가해 브랜드별 상품들을 쉽게 조회할 수 있도록 구성

#### 3. 검색 초기화 버튼
- [x] 검색리스트 조회요청 시 검색창이 초기화되도록 설계하여 이후 재검색을 필요로 하는 상황에서 불필요한 행동을 줄이고 더 빠르게 사용 가능

#### 4. 검색어 필터 기능
- [x]  대소문자 구분 x
- [x]  제품명, 브랜드명 으로 필터링 한 뒤 리스트 병합

#### 6. 검색 기록 제공
- [ ] 검색창 클릭 시 하단에 이전 검색 기록이 제공되도록 설계<br> 이전에 검색했던 상품을 확인할 수 있어 자주 구매하는 상품을 빠르게 확인 및 검색 가능


<br>
<br>


### 📝 기능 목록 명세

#### ✔ 김지영

- `Pagination` 컴포넌트 구현

#### ✔ 고병표

- `Header`, `ItemBox` 구현
- `MainBox`, `ItemBrandBtn` 구현
- `검색 기능` 및 `Filter` 로직 구현

#### ✔ 홍수연

- `TagList`, `Tag` 컴포넌트 구현
  - 토글기능 구현
-  `Input` 컴포넌트 구현
    - 실시간 입력값 조회
   - debounce 적용
-  `ResetBtn` 컴포넌트 구현
   - 버튼 클릭 시 검색창, 데이터리스트 초기화
- `Main` 컴포넌트에 domain 컴포넌트 병합 및 UI 수정


<br>
<br>
<br>

## 📈 디렉토리 구조

```
├── README.md
├── build
│   ├── mock
│   ├── asset-manifest.json
│   ├── index.html
│   ├── robots.txt
│   └── static
├── config-overrides.js
├── package.json
├── public
│   ├── mock
│   ├── index.html
│   └── robots.txt
├── src
│   ├── apis
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── styles
│   ├── types
│   └── utils
├── APP.tsx
├── index.tsx
├── setupTest.ts
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```
