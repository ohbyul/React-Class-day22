//1. 액션 생성
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMEENT'

//액션 내보내기
export const increment = () => ( {type : INCREMENT} )
export const decrement = () => ( {type : DECREMENT} )

//초기화
const initialState = {cnt : 1}

//리듀서
const reducer = (state = initialState , action) => {
    switch ( action.type){
        case INCREMENT:
            return {
                cnt : state.cnt + 50
            }
        case DECREMENT:
            return {
                cnt : state.cnt - 10
            }
        default:
            return state
    }
}

export default reducer