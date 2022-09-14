import * as types from './LoginTypes'

export const isLogged = () => {
    return {
        type: types.LOGIN
    }
}

export const onLoggin =() =>{
    return {
        type:types.ONLOGIN
    }
}