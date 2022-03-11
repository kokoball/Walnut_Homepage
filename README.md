# 온라인 교육 소개 홈페이지 개발 프로젝트

<br>

## 🚀 정보

- [배포주소 바로가기](https://walnut-homepage-lbwqtjnur-kokoball.vercel.app/)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img alt="styled--components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><img alt="Next.js" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>


## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/kokoball/Walnut_Homepage.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn dev
```

<br>

## ✨ 구현 사항

1. 도서 이미지가 무한히 반복되는 애니메이션
- 우에서 좌로 무한 반복되는 애니메이션 구현
2. 좌, 우 버튼을 클릭해 이동하는 무한 반복 후기 페이지
- 각 후기들을 하나의 슬라이드로 만들고, 양 옆 버튼을 이용하여 슬라이드 이동할 수 있게 구현
- 버튼 클릭 시, 현재 슬라이드 가리키는 상태값 증가하고 후기들을 담고 있는 슬라이드 트랙을 이동하는 방식으로 구현

<br>

## 🏗 프로젝트 특이사항

#### 1. thumbnailUrl 이미지
- 주어진 API로(thumbnailUrl) 이미지 설정 시 403 오류가 발생하여 error 발생 시 기본 이미지 출력하도록 설정함

#### 2. 파일 만료기간
- 주어진 API로 파일 만료 기간 설정 시 파일들이 모두 유효기간이 만료되어 제대로 된 동작을 보여줄 수 없음
- 따라서 getExpiresDate 함수에서 임의로 날짜 변경함 (src > utils), 설정 날짜는 constants에 따로 보관함
```tsx
export const getExpiresDate = (date: number) => {
  // @NOTE: 임의로 날짜 변경
  // const expiresDate = new Date(date * 1000).getTime();
  // const nowDate = new Date().getTime();
```
#### 3. NotFoundPage 추가
- 데이터가 없을 때 나타나는 페이지 추가

#### 4. 링크 상세 화면 만료됨 전체 경로 만료됨 표시 추가
- 데이터가 만료되었을 시 전체 경로 대신 만료됨 표시 설정


<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── public
│   ├── svgs
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   ├── constants
│   ├── pages
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── package.json
├── tsconfig.json
├── yarn-error.log
└── yarn.lock
```
