import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

export default class MovieInfo extends Component {

	static propTypes = {
		poster: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		genres: PropTypes.array.isRequired,
		synopsis: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className="Movie__Column">
				<MovieTitle title={this.props.title} />
				<div className="Movie__Genres">
					{this.props.genres.map((genre, index) => {
						return (
							<MovieGenres genres={this.props.genres} key={index} />
						);
					})}
				</div>
				<div className="Movie__Synopsis">
					<MovieSynopsis synopsis={this.props.synopsis} />
				</div>
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
			<h1>{this.props.title}</h1>
		)
	}
}

class MovieGenres extends Component {
	static propTypes = {
		genres: PropTypes.string.isRequired
	}

	render() {
		return (
			<span className="Movie__Genre">{this.props.genres}</span>
		)
	}
}

class MovieSynopsis extends Component {
	static propTypes = {
		synopsis: PropTypes.string.isRequired
	}

	render() {
		return (
				<LinesEllipsis text={this.props.synopsis} maxLine='3' ellipsis='...' trimRight="trimRight" basedOn='letters'/>
			)
	}
}
