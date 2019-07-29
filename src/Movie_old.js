import React, from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

	static propTypes = {
		title: PropTypes.string.isRequired, // isRequired는 해당 요소가 필수임을 나타냄
		poster: PropTypes.string.isRequired
	}

	render(){
		//console.log(this.props);
		return(
			<div>
				<MoviePoster poster={this.props.poster} />
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}

class MoviePoster extends Component{

	static propTypes = {
		poster: PropTypes.string.isRequired
	}

	render(){
		//console.log(this.props)
		return(
			<img src={this.props.poster} alt="Movie Poster" />
		)
	}
}

/* 해당 function 컴포넌트는 상기 class 컴포넌트와 같다.
functional 컴포넌트(dumb 컴포넌트)는 한 개의 props와 한 개의 html태그만 필요 (state가 없음)*/
function Movie({title, poster}){
	return (
		<div>
			<MoviePoster poster={poster} />
			<h1>{title}</h1>
		</div>
	)
}

function MoviePoster({poster}){
	return (
		<img src={ poster} alt="Movie Poster"/>
	)
}

Movie.propTypes = {
	title: propTypes.string.isRequired,
	poster: propTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster: propTypes.string.isRequired
}

export default Movie;
