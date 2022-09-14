import  * as  types from './LoginTypes';

const LoginState = {
    logged: false,
    onlogin: false
}

const LoginReducers = (state = LoginState, action)=>{
    switch(action.type){
        case types.LOGIN:
            return{
                ...state,
                logged : !state.logged
            };
        case types.ONLOGIN:
            return{
                ...state,
                onlogin: !state.onlogin
            }
        
        default: return state
    }
}
export default LoginReducers;