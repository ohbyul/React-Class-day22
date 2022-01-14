import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/modules/counter';

const Counter = () => {
    const cnt = useSelector(state => state.counter.cnt)
    const color = useSelector(state => state.changecolor.color)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{color : color}}> 값 전달 : {cnt} </h1>
            <p>
                <button onClick={ () => dispatch( increment(50) ) }>50씩 증가</button>
                <button onClick={ () => dispatch( decrement(10) ) }>10씩 감소</button>
            </p>
        </div>
    );
};

export default Counter;