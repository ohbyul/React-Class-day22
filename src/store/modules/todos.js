//1.액션 생성
//추가
const INSERT = 'todos/INSERT'
//삭제 
const REMOVE = 'todos/REMOVE'
//수종
const TOGGLE = 'todos/TOGGLE'
//입력
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

//2.액셔 내보내기
export const insert = () => ( {type : INSERT} )
export const remove = ( id ) => ( {type : REMOVE, id } )
export const toggle = (id) => ( {type : TOGGLE , id} )
export const changeInput = () => ( {type : CHANGE_INPUT} )


// 초기값
const initialState = {
    text : '',
    todos : [
        {id:1 , text : '그해 봄' , isChecked : false },
        {id:2 , text : '그해 여름' , isChecked : true },
        {id:3 , text : '그해 가을' , isChecked : true },
        {id:4 , text : '그해 겨울' , isChecked : false },
    ]
}

//리듀서만들기
const reducer = ( state = initialState , action) => {
    switch (action.type){
        case INSERT:
            return {
                ...state 
            }
        case REMOVE : 
            return {
                ...state ,
                todos : state.todos.filter( todo => todo.id !== action.id )
            }
        case TOGGLE : 
            return {
                ...state ,
                todos : state.todos.map( todo => todo.id === action.id ? 
                                        {...todo , isChecked : !todo.isChecked } : todo )   //이거 복잡하고 어려움
            }
        case CHANGE_INPUT : 
            return {
                ...state 
            }
        default : 
            return state
    }
}

export default reducer
