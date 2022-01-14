//1.액션 생성
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

//2.액션 내보내기
export const changeColor = ( newcolor ) => ( {type : CHANGE_COLOR , newcolor} )
// export const changeColor = ( newcolor ) => ( {type : CHANGE_COLOR , newcolor : newcolor} )
//이렇게 써도됨 newcolor = newcolor 이름이 같기 때문에

//3.초기값
const initialState = {color : 'hotpink' }

//4.리듀서 만들기 (순수함수)
const reducer = (state = initialState , action ) => {
    switch(action.type){
        case CHANGE_COLOR:
            return {
                color : action.newcolor
            }
        default:
            return state
    }
}
export default reducer