# 온라인 교육 소개 홈페이지 개발 프로젝트

<br>

## 🚀 정보

- [배포주소 바로가기](https://walnut-homepage-lbwqtjnur-kokoball.vercel.app/) (width = 1200px 이상 화면에 최적화되어있습니다.)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img alt="styled--components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img alt="Next.js" src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>


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

- [x] 땅콩 애니메이션 재생
- [x] 비디오 영역 진입 시 영상 자동 재생
  - 소리없음
  - 반복 재생
  - 영상 관련 인터페이스 숨김
- [x] 영역 진입 시 체크 이미지 1,2,3, 순차적으로 재생
- [x] 우에서 좌로 도서 이미지가 무한히 반복되는 애니메이션 구현
- [x] 영역 진입 시 좌에서 우로 애니메이션 재생 
- [x] 좌/우 버튼으로 통한 무한 스크롤 구현  
- [x] 영역 진입시 버튼 내려가고 말풍선 생기는 애니메이션 구현  

<br>

## 🏗 프로젝트 상세 설명

#### 1. 우에서 좌로 도서 이미지가 무한히 반복되는 애니메이션 구현
<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156712336-5feb2fae-42cd-4cc4-b7d5-18445704e33c.gif" alt="애니메이션 이미지 슬라이드" height="200px">
</div>

- 두 개의 도서 목록 리스트를 이용한 무한 애니메이션 구현
- left 속성을 이용하여 같은 width 크기 만큼 리스트를 좌우로 위치
- translateX를 이용한 우에서 좌로 흐르는 동일한 애니메이션 적용

#### 2. 좌/우 버튼으로 통한 무한 스크롤 구현
<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156715665-0f96cbd8-6fba-48cd-ae2b-ea2f8a9c7be9.gif" alt="무한 로테이션 후기.gif" width="70%" height="400px">
</div>

- 버튼 클릭시 슬라이드 상태값 증가(슬라이드 위치 이동)
- rotate를 이용한 유저 이미지 변경 및 회전
- translateX를 이용한 우에서 좌로 흐르는 동일한 애니메이션 적용
- 슬라이드 하단 스크롤 : 기본 크기 20% 에서 100%까지 증가하게 구현

#### 3. 영역 진입 시 체크 이미지 1,2,3, 순차적으로 재생
<div align="center">
   <img src="https://user-images.githubusercontent.com/68905615/156722719-4b998785-9b6e-42b6-8dab-3f9537fa1a5e.gif" alt="체크 이미지.gif" width="70%">
</div>

- Check 컴포넌트의 wait 속성을 이용하여 각 체크 컴포넌트 마다 다른 값 setTimeout()에 전달
- setTimeout()의 delay 값으로 순차적 렌더링 구현

<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── components
├── constants
├── hooks
├── pages
├── styles
├── types
├── utils
├── .babelrc
├── .eslintrc.js
├── .next-env.d.ts
├── .next.config.js
├── .eslintignore
├── .gitignore
├── .prettierrc.js
├── package.json
├── tsconfig.jest.json
├── tsconfig.json
└── yarn.lock
```
