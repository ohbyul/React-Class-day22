import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, remove, toggle } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const {id , text, isChecked } = todo
    const dispatsh = useDispatch()
    return (
        <li>
            <input type="checkbox" 
                    checked={isChecked} 
                    onChange={()=>dispatsh(toggle(id))}/>
            {id} 번 / {text} / {isChecked === true ? 'ture' : 'false'} <button onClick={ () => dispatsh( remove(id) )}>삭제</button>
        </li>
    );
};

export default TodoItem;