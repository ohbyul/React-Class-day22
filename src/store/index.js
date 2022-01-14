import {combineReducers} from 'redux'
import color from './modules/color'
import count from './modules/count'
import counter from './modules/counter'
import changecolor from './modules/changecolor'
import todos from './modules/todos'

export default combineReducers({
    color ,
    count , 
    counter , 
    changecolor , 
    todos
})