import {createStore, useStore} from "vuex";
import { TypeRootState } from "./type";
import user from './user.js'

export default createStore({
    modules:{
        user
    }
})