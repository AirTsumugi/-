import { ActionTree } from 'vuex'
import { States } from './state'

const actions: ActionTree<States,any> = {
    MODILIYUSER(context,newdata){
        context.commit('MODIUSER',newdata) 
    }
}
export default actions