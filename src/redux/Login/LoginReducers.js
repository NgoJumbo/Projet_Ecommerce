import  * as  types from './LoginTypes';

const LoginState = {
    logged: false
}

const LoginReducers = (state = LoginState, action)=>{
    switch(action.type){
        case types.LOGIN:
            return{
                ...state,
                logged : !state.logged
            };
        default: return state
    }
}
export default LoginReducers;