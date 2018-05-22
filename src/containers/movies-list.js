import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class MovieList extends Component{
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <li 
                key={movie.title} 
                onClick={() => this.props.selectMovie(movie)}
                className="list-group-item">
                {movie.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Returned is props on the container
function mapStateToProps(state) {
    return { 
        movies: state.movies 
    };
}

//Returned is props on MovieList container 
function mapDispatchToProps(dispatch) {
    //bindActionCreators passes the result of selectMovie to all reducers.
    return bindActionCreators ({selectMovie : selectMovie}, dispatch)
}

//Make MovieList from a component to a container.
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);