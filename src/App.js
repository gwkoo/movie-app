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
]

class App extends Component {

	// 해당 싸이클은 컴포넌트가 존재하기 시작할 때 자동으로 발생 (1)componentWillMount() -> (2)render() -> (3)componentDidMount

	componentWillMount(){
		console.log('will mount')
	}

	componentDidMount(){
		console.log('did mount')
	}

	render(){
		console.log('did render')
	  return(
	    <div className="App">
				{movies.map((movie, index) => {
					return(
						<Movie title={movie.title} poster={movie.poster} key={index} />
					)
					/* 상위 맵핑과 동일한 코드 (map에는 array 기능이 있다)
					{(
						<Movie title={movies[0].title} poster={movies[0].poster} />
						<Movie title={movies[1].title} poster={movies[1].poster} />
						<Movie title={movies[2].title} poster={movies[2].poster} />
						<Movie title={movies[3].title} poster={movies[3].poster} />
					)}*/
				})}
	    </div>
	  );
	}
}

export default App;
