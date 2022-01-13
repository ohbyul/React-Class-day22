//1. 액션 생성하기
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'


//2.액션 내보내기
export const increment = () => ( {type: INCREMENT} )
export const decrement = () => ( {type: DECREMENT} )
export const reset = () => ( {type: RESET} )

//3. 초기화
const initialState = {num : 1}

//4.리듀서 만들기
const reducer = (state = initialState , action) => {
    switch(action.type){
        case INCREMENT:
            return {
                num : state.num + 1 //실수..state + 1 했다...
            }
        case DECREMENT:
            return {
                num : state.num -1
            }
        case RESET:
            return {
                num : 0
            }
        default:
            return state
    }
}

export default reducer