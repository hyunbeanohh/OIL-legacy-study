<h1>👉 영화 평점 웹 애플리케이션 / Movie API 👈


<h3> 👨🏻‍💻 프로젝트 기간    
<br/>
<br/>
 
 + 2021.02~2021.03
 - - - - - - 

<h3> 💁🏻 사용된 기술 & 라이브 러리
<br/>
<br/>


+ <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Javascript-important?style=flat-square&logo=Javascript&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Redux-3766AB?style=flat-square&logo=Redux&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/MongoDB-lightgray?style=flat-square&logo=MongoDB&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat-square&logo=Ant-Design&logoColor=white"/><br/>
- - - - -
 
 
<h3> 💻 프로젝트 구현 💻
<br/>
<br/>
 
1. Hook(훅)을 사용한 함수형 컴포넌트 구현
 
 
 + 영화 이미지들을 평점 순으로 렌더링 할 수 있도록 배열로 저장했습니다.
 
 
 ``` JSX
 function LandingPage() {
    const [Movies, setMovies] = useState([])//console.log(response.results) -> 배열 형태, initail state를 배열로 설정
    const [MainMovieImage, setMainMovieImage] = useState(null) //제일 인기있는 영화의 이미지는 results[0]으로 갱신
    const [CurrentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
            fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response=>response.json())
        .then(response=>{
            setMovies([...Movies,...response.results])
            setMainMovieImage(response.results[0])
            setCurrentPage(response.page)
        })
    }
    
    const loadMoreItems = () =>{ //CurrentPage의 initail state를 +1, 페이지를 덮지 않고 추가로 생성.
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)
    }
 ```
 
 
+ 영화 디테일 페이지에서는 해당 영화의 정보를 출력하고 영화 배우들을 알 수 있도록 토글 버튼을 구현했습니다.
 
 ``` JSX
 function MovieDetail(props) {

    let movieId = props.match.params.movieId // (movieId : "45445") 처럼 되어있기 때문에 형식에 맞게 가져와야 함.
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false) // initial state를 false로 설정 후 버튼 클릭시 true가 되고 배우가 표시 됨.

    useEffect(() => {

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
        .then(response => response.json())
        .then(response=>{
            //console.log(response)
            setMovie(response)
        })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response=>{
            setCasts(response.cast)
         })
    }, [])

    const toggleActorView = () =>{ //Actor View
        setActorToggle(!ActorToggle)
    }
```
 - - - - -
 
 
2.OPEN API를 이용한 영화 평점 서비스
 
 + TBDM에서 제공하는 API를 이용해서 서비스를 구현했습니다.
 
 
 ``` Javascript
export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export const API_KEY = 'f42c1a467166f72d0b7c3992cedb8ee7'
```
 
 - - - - -
 
 
 <h3> 💡 프로젝트 결과 화면
<br/>
<br/>
  
 + Main Page
<br/>

<img width="720" alt="영화 메인 페이지" src="https://user-images.githubusercontent.com/39178226/120443599-c4099980-c3c1-11eb-8e6f-0d940947f26e.png">
<br/>
<br/>


+ Movie Detail Page  
<br/>  
<img width="720" alt="영화 디테일 페이지" src="https://user-images.githubusercontent.com/39178226/120443871-0a5ef880-c3c2-11eb-881e-f3c6a8a3d0c0.png">
  
- - - - -

<h3> ❗️ 만들면서 힘들었던 점 ❗️
 
 
<h4> ❕ CORS 보안 정책 ❕

<br/>
<br/>
 
```
서비스를 만들면서 클라이언트와 서버가 다른 포트를 가르키는 현상 때문에 브라우저 상에서 CORS 이슈라는 에러가 발생했습니다. 
CORS 이슈는 Cross-Origin-Resource-Security 라는 것의 줄임말 이라는 것을 알게 되었고 
클라이언트와 서버가 다른 포트를 가르키면서 나타나는 에러라는 것을 알게 되었습니다.
검색을 통해서 여러가지 해결 방법이 있다는것을 알게 되었고 그 가운데 middleware인 createProxyMiddleware를 
http-proxy-middleware에서 가져와 해결 할 수 있었습니다.
```
