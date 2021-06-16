# 👉YouTube 클론 코딩 프로젝트 👈

### 👨🏻‍💻 프로젝트 기간
2021.06.01 ~  2021~06.17 

### 💁🏻 사용된 기술 & 라이브러리

+ <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Javascript-important?style=flat-square&logo=Javascript&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Redux-3766AB?style=flat-square&logo=Redux&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/MongoDB-lightgray?style=flat-square&logo=MongoDB&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat-square&logo=Ant-Design&logoColor=white"/><br/>

- - - - -
### 프로젝트 실행
    server - npm install
    client - npm install
    npm run dev


### 💻 프로젝트 구현


#### 1.LandingPage
+ boiler-plate의 로그인 기능을 통해 로그인 후 동영상을 업로드 할 수 있도록 구현.
+ `ffmpeg`를 통해서 Thumbnail을 생성하고 비디오에 대한 썸네일을 생성 후 보여줌.
+ 몽고DB에서 회원들에 대한 정보를 저장하며 정보들을 바탕으로 영상 제목,업로더,시간,조회수,업로드 시간을 출력.
+ 각각의 비디오에 맞는 ID 값을 설정하여 해당 비디오에 대한 페이지로 이동할 수 있도록 함. `http://localhost:3000/video/609514aec793ed5b50d0c52d`

#### 2.VideoUploadPage
+ antd을 통해서 전체적인 틀을 구성.
+ 비디오에 대한 정보는 몽고DB에 저장되며 저장된 정보들을 바탕으로 LandingPage에 올려지게 됨.

#### 3.VideoDetailPage
+ videoId 값에 맞는 비디오를 보여주며 비디오 업로더를 한 회원에게는 구독 버튼이 활성회 되지 않도록 함.
+ 댓글 기능을 구현했으며 각 댓글에 대한 대댓글을 볼 수 있도록 구현.
+ 댓글 정보는 몽고DB에서 저장하고 제일 최 상단의 댓글이면 보여지지 않도록 함.
+ 각 댓글에 대한 개수는 
    1. VideoDetailPage의 Comment State에 저장되며 각 자식 컴포넌트들에게 전달되고 
    2. ReplyComment에서 map 메서드를 통해 계산 후 
    3. setChildStateNumner에 저장되어 ChildStateNumber로 렌더링 됨.
+ SideVideo는 오른쪽 Nav에 렌더링되며 몽고DB에 저장되어 있는 비디오들의 정보를 가져와 출력함.
+ 각각의 SideVideo는 고유 id값이 링크되어 있으며 클릭시 해당 비디오 페이지로 이동함.
+ 좋아요,싫어요에 대한 기능을 구현하여 각각의 버튼 클릭시 좋아요,싫어요 숫자가 증가,감소함.


#### 4.SubscriptionPage
+ 비디오에 대한 정보를 몽고DB에서 받아와 구독하는 비디오의 정보를 출력.
+ 비디오가 많아진다면 antd을 통해서 적절하게 나누어 질 수 있도록 lg,md,xs 마다 사이즈 구현.
+ 구독하고 있는 비디오의 썸네일을 map 함수를 통해 각각 썸네일 이미지를 출력 할 수 있도록 함.

</br>


### 💡 프로젝트 결과
    - 프로젝트 끝나는데로 정리해서 추가.

</br>


### ❗️느낀점 및 힘들었던 점
    - 프로젝트 끝나는데로 정리해서 추가.


### 참고자료
[인프런](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0/dashboard)
