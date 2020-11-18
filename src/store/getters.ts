import { Form } from 'element-ui'
import {GetterTree} from 'vuex'
import {States} from './state'
const getters: GetterTree<States,any> = {
    getUser(state){
        return state.user
    }
}
export default getters