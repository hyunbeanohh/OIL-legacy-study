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
</br>

### 💻 프로젝트 구현
</br>

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
</br>
1. LadingPage
<img width="720" alt="LandingPage" src="https://user-images.githubusercontent.com/39178226/122348922-a1ad7980-cf86-11eb-81eb-c65b7343ed8d.png">
</br>

2.VideoDetailPage
<img width="720" alt="VideoDetailPage" src="https://user-images.githubusercontent.com/39178226/122349053-cd306400-cf86-11eb-9fa6-5bdb6bcf780a.png">
</br>

3.Comment
<img width="720" alt="Comment Part" src="https://user-images.githubusercontent.com/39178226/122349192-f5b85e00-cf86-11eb-9c24-2ac6076d2816.png">
</br>

4.SubscriptionPage
<img width="720" alt="SubscriptionPage" src="https://user-images.githubusercontent.com/39178226/122349278-11236900-cf87-11eb-95de-f6d3d1f75473.png">
</br>


### ❗️느낀점 및 힘들었던 점
    1.부모 컴포넌트와 자식 컴포넌트들의 props를 전달하는 방식이 어려워서 다양한 자료를 찾아가면서 공부를 하게 되었다.
    2.route에서 client부분으로 DB의 정보들을 보내줄때 나타나는 에러들을 잡지 못했는데 proxy 관련 에러이기 때문에 공부를 더 해서 에러를 수정할 수 있도록 해야겠다.
    3.DB의 스키마를 각각 구현하면서 프론트 단에 뿌려주는 것이 쉬운 작업이 아니라는것을 깨달았다.
    4.antd을 사용하면서 간단한 디자인을 구현할 수 있게 되었다.
    5.각각의 컴포넌트를 적절하게 활용하여 재사용할 수 있도록 관리해야 한다.
    6.함수의 네이밍을 좀 더 알아볼 수 있도록 작성하고 코드 가독성을 높여야 한다.
    7.댓글을 추가할 때 웹이 느려지는 경우가 있는데 최적화를 고민해봐야 겠다.
    8.Redux를 이용한 상태관리가 매우 편하다는것을 알게 되었다.
    9.두번째 클론코딩을 했는데 어느정도 눈에 들어온다는게 뿌듯했다.

### 참고자료
[인프런](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9C%A0%ED%8A%9C%EB%B8%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0/dashboard)
