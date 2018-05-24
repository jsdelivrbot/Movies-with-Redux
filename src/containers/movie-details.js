import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class MovieDetails extends Component{
    render() {

        //Starting case for inital app startup when state = null
        if(!this.props.movie) {
            return <div><h4>Select a movie to get started</h4></div>
        }

        return(
            <div>
                <h3>Details for: </h3>
                <div>Title: {this.props.movie.title}</div>
                <div>Year: {this.props.movie.year}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        movie: state.activeMovie
    }
}

export default connect (mapStateToProps)(MovieDetails);