import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


export default class MoviePoster extends Component {
	render() {
		return (
			<div>
				<img src={this.props.poster} alt={this.props.title} className="Movie__Poster" />
			</div>
		)
	}
}
