// import React from 'react';  old : import React, { Component } from 'react';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';
import MovieInfo from './MovieInfo';
import './Movie.css';

class Movie extends Component {

	static propTypes = {
		poster: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		genres: PropTypes.array.isRequired,
		synopsis: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="Movie">
				<div className="Movie__Column">
					<MoviePoster poster={this.props.poster} />
				</div>
				<MovieInfo title={this.props.title} genres={this.props.genres} synopsis={this.props.synopsis} />
			</div>
		)
	}
}


/*
class MovieGenres extends Component {
	static propTypes = {
		genres: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				<span>{this.props.genres}</span>
			</div>
		)
	}
}

class MovieSynopsis extends Component {
	static propTypes = {
		synopsis: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				<LinesEllipsis text={this.props.synopsis} maxLine='3' ellipsis='...' trimRight="trimRight" basedOn='letters'/>
			</div>
			)
	}
}

class MovieTitle extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		)
	}
}
function Movie({title, poster, genres, synopsis}){
	return (
		<div className="Movie">
			<div className="Movie__Column">
				<MoviePoster poster={poster} alt={title} />
			</div>
			<div className="Movie__Column">
				<h1>{title}</h1>
				<div className="Movie__Genres">
					{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
				</div>
				<div className="Movie__Synopsis">
					<LinesEllipsis
						text={synopsis}
						maxLine='3'
						ellipsis='...'
						trimRight
						basedOn='letters'
					/>
				</div>
			</div>
		</div>
	)
}


1)
class MoviePoster extends Component{
	static propTypes = {
		poster: PropTypes.string.isRequired
	}

	render(){
		return(
			<img src={this.props.poster} alt={this.props.title}/>
		)
	}
}
2) functional component (dumb component)
function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}
1) == 2) 동일

function MovieGenre({genre}){
	return (
		<span className="Movie__Genre">{genre}</span>
	)
}

// 하기 영역은 functional 컴포넌트 사용 시 prop types 확인 방법
Movie.propTypes = {
	title: PropTypes.string.isRequired, // isRequired : 해당 요소가 필수임을 나타냄
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired

}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
}
*/

export default Movie;
