import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class MovieDetails extends Component{
    render() {

        if(!this.props.movie) {
            return <div><h4>Select a movie to get started</h4></div>
        }

        return(
            <div>
                <h3>Details for: </h3>
                <div>{this.props.movie.title}</div>
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