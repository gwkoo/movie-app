import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
	"Matrix",
	"Full Metal Jacket",
	"Oldboy",
	"Star Wars"
]

const movieImages = [
	"http://cfile230.uf.daum.net/image/120165194C241D693330B4",
	"https://i.ebayimg.com/images/g/9U4AAMXQfvlSj-e-/s-l300.jpg",
	"https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Oldboy-poster-alternate-by-Rope-of-Silicon.jpg",
	"https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"
]

/* state 안으로 이동
const movies = [
	{
		title: "Matrix",
		poster: "http://cfile230.uf.daum.net/image/120165194C241D693330B4"
	},
	{
		title: "Full Metal Jacket",
		poster: "https://i.ebayimg.com/images/g/9U4AAMXQfvlSj-e-/s-l300.jpg"
	},
	{
		title: "Oldboy",
		poster: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Oldboy-poster-alternate-by-Rope-of-Silicon.jpg"
	},
	{
		title: "Star Wars",
		poster: "https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"
	}
]*/

class App extends Component {

	// 해당 싸이클은 컴포넌트가 존재하기 시작할 때 자동으로 발생 (1)componentWillMount() -> (2)render() -> (3)componentDidMount

	state = {}

	componentWillMount(){
		console.log('will mount')
	}

	_renderMovies = () => {
		const movies = this.state.movies.map((movie, index) => {
			return <Movie
				title={movie.title_english}
				poster={movie.medium_cover_image}
				key={movie.id}
				genres={movie.genres}
				synopsis={movie.synopsis}
			/>
		})
		return movies
	}

	render(){
		console.log('did render')
		const { movies } = this.state;
	  return(
	    <div className={movies ? "App" : "App--loading"}>
				{movies ? this._renderMovies() : 'Loading'}
	    </div>
	  );
	}

	componentDidMount(){
		console.log('did mount');
		this._getMovies();
		/*setTimeout(() => {
			this.setState({
				movies: [
					{
						title: "Matrix",
						poster: "http://cfile230.uf.daum.net/image/120165194C241D693330B4"
					},
					{
						title: "Full Metal Jacket",
						poster: "https://i.ebayimg.com/images/g/9U4AAMXQfvlSj-e-/s-l300.jpg"
					},
					{
						title: "Oldboy",
						poster: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Oldboy-poster-alternate-by-Rope-of-Silicon.jpg"
					},
					{
						title: "Star Wars",
						poster: "https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"
					}
				]
			})
		}, 5000)*/
	}

	_getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies // old javascript => 'movies : movies'
		})
	}

	_callApi = () => {
		// promise는 성공적으로 수행할 수 있고, 그렇지 않을 경우 결과물을 catch, then으로 받아볼 수 있음
		return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count') // fetch는 심플하게 url을 ajax로 불러올 수 있음 (ver.Old : xml http request)
		.then(response => response.json())
		.then(json => /* return */ json.data.movies) // arrow function (=>)은 return이 자동이므로 작성 불필요.
		.catch(err => console.log(err))
	}

}

/*******
	1) fetch를 callApi로 변경
	2) getMovies function 사용 (getMovies는 asynchronous function)
	3) getMovies안에 movies라는 이름의 const variable 생성
	4) callApi 작업이 완료되고 return 하기를 await함
	5) callApi는 fetch promise를 return할 것인데 이는 모든 데이터의 json임.
		그래서 'json.data.movies'라는 value는 const movies의 결과값이 됨
****** */

export default App;
