import * as types from './LoginTypes'

export const isLogged = () => {
    return {
        type: types.LOGIN
    }
}

// export const isLogout =() =>{
//     return {
//         type:types.LOGOUT
//     }
// }