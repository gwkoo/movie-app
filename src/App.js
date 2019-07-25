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
			return <Movie title={movie.title} poster={movie.poster} key={index} />
		})
		return movies
	}

	render(){
		console.log('did render')
	  return(
	    <div className="App">
				{this.state.movies ? this._renderMovies() : 'Loading'}
	    </div>
	  );
	}

	componentDidMount(){
		console.log('did mount');
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
		// promise는 성공적으로 수행할 수 있고, 그렇지 않을 경우 결과물을 catch, then으로 받아볼 수 있음
		fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating') // fetch는 심플하게 url을 ajax로 불러올 수 있음 (ver.Old : xml http request)
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => console.log(err))
	}

}

export default App;
