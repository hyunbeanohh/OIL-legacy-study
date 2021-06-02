<h1>영화 평점 웹 애플리케이션 / Movie API


<h3> 프로젝트 기간    
<br/>
<br/>
 
 + 2021.02~2021.03
 - - - - - - 

<h3> 사용된 기술 & 라이브 러리
<br/>
<br/>


+ <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=React&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Javascript-important?style=flat-square&logo=Javascript&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Redux-3766AB?style=flat-square&logo=Redux&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/MongoDB-lightgray?style=flat-square&logo=MongoDB&logoColor=white"/><br/>
+ <img src="https://img.shields.io/badge/Ant Design-0170FE?style=flat-square&logo=Ant-Design&logoColor=white"/><br/>

  
<h3> 프로젝트 구현
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
 
 
2.OPEN API를 이용한 영화 평점 서비스
 
 + TBDM에서 제공하는 API를 이용해서 서비스를 구현했습니다.
 
 
 ``` Javascript
export const USER_SERVER = '/api/users';

export const API_URL = 'https://api.themoviedb.org/3/';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export const API_KEY = 'f42c1a467166f72d0b7c3992cedb8ee7'
```
 
 
 <h3> 프로젝트 결과 화면
  
```ㄱㅕㄹ고ㅓ 
```
 
