export const FETCH_NEW_COMPONENT = 'FETCH_NEW_COMPONENT';

export function fetchNewComponent(state) {
    return {
        type: FETCH_NEW_COMPONENT,
        state
    };
}

const initState = {
    fetching: false 
};

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_NEW_COMPONENT:
            return {
                ...state,
                fetching: action.state
            };

        default:
            return state;
    }
};
