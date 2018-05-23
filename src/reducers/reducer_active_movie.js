//arugment state is not application state
export default function(state = null, action) {
    //wanted action.
    switch(action.type) {
        case 'MOVIE_SELECTED':
            return action.payload;
    }

    //base case. return current state
    return state;
}