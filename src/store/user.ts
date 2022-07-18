import Cookie from 'js-cookie'
export default {
    state:{
        token:'',
    },
    mutations:{
        setToken(state: { token: any },val: string){
            state.token=val
            Cookie.set('token',val)
        },
        clearToken(state: { token: string }){
            state.token=''
            Cookie.remove('token')
        },
        getToken(state: { token: string |undefined}){
            state.token=state.token||Cookie.get('token')
        }
    }
}