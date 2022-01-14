//1. 액션 생성
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMEENT'

//액션 내보내기
export const increment = (step) => ( {type : INCREMENT, step} )
export const decrement = (step) => ( {type : DECREMENT, step} )
//step = 매개변수 받은거


//초기화
const initialState = {cnt : 1}

//리듀서
const reducer = (state = initialState , action) => {
    switch ( action.type){
        case INCREMENT:
            return {
                cnt : state.cnt + action.step
            }
        case DECREMENT:
            return {
                cnt : state.cnt - action.step
            }
        default:
            return state
    }
}

export default reducer