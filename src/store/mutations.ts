import { MutationTree } from 'vuex'
const mutations: MutationTree<any> = {
    MODIFIY(state,newdata){
        state.list = newdata
    },
    MODIUSER(state){
        state.user = 'users'
    }
}
export default mutations