import axios from 'axios';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAILURE = 'AUTH_FAILURE';

export function checkLogin() {
    return async (dispatch) => {
        try {
//            const user = (await axios.get(`/interface/login/user`)).data;
			const user = {
				code: "100000",
				data: {
					name: 'nick'
				}
			};
            
            if (user.code === "100000") {
                dispatch({ 
                    type: AUTH_SUCCESS, 
                    name: user.data.name
                });
            } else {
                dispatch({ 
					type: AUTH_FAILURE,
					info: user.msg
				});
            }
        } catch (err) {
            dispatch({ 
				type: AUTH_FAILURE,
				info: '出现错误，请稍后再试！'
			});
        }
    };
}

export default (state = {
	info: '',
    name: '',
    logged: false
}, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                info: '',
                logged: true,
                name: action.name
            };

        case AUTH_FAILURE:
            return {
                info: action.info,
                logged: false
            };

        default:
            return state;
    }
}
