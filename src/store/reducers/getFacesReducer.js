import { GET_FACES_SUCESS, GET_FACES_FAILURE } from '../actions/actionTypes';

const initialState = {
    faces: [],
    error: '',
    filteredFaces: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FACES_SUCESS:
			return {
                ...state,
                faces: action.faces
            };
        case GET_FACES_FAILURE:
			return {
                ...state,
                error: action.error
            }
		default:
			return state;
	}
};

export default reducer;
