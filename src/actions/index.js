export function selectMovie (movie) { 
    //selectMovie is an Action Creator.
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
}