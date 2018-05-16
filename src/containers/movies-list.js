import React, { Component } from 'react';
import { connect } from 'react-redux'

class MovieList extends Component{
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <li key={movie.title} className="list-group-item">{movie.title}</li>
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


function mapStateToProps(state) {
    return { 
        movies: state.movies 
    };
}

export default connect(mapStateToProps)(MovieList);