import { act } from "react-dom/test-utils"

//액션 생성
const HOTPINK = 'color/HOTPINK'
const SKYBLUE = 'color/SKYBLUE'
const TOMATO = 'color/TOMATO'
const LIME = 'color/LIME'

//액션 내보내기
//dispatch({type: AAA}) -> dispatch( aaa() )
export const hotpink = () => ( {type :HOTPINK } )
export const skyblue = () => ( {type :SKYBLUE } )
export const tomato = () => ( {type :TOMATO } )
export const lime = () => ( {type :LIME } )

//초기화
const initialState = {color : 'red'}

//리듀서 만들기 (순수 함수)
const reducer = ( state = initialState , action ) => {
    switch(action.type){
        case HOTPINK : 
            return {
                color : 'hotpink'
            }
        case SKYBLUE : 
            return {
                color : 'skyblue'
            }
        case TOMATO : 
             return {
                color : 'tomato'
             }
        case LIME : 
            return {
                color : 'lime'
            }
        default:
            return state
    }
}

export default reducer