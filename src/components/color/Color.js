import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../store/modules/changecolor';
import { hotpink, lime, skyblue, tomato } from '../../store/modules/color';

const Color = () => {

    //const 이름 = useSelector(앱에서 내려준 모든 상태값 => 모든상태값중에.리두서파일명.상태값)
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{color : color}}>컬러 : {color} </h1>
            <p>
                <button onClick={ () => dispatch( changeColor('hotpink') )}>hotpink</button>
                <button onClick={ () => dispatch( changeColor('skyblue') )}>skyblue</button>
                <button onClick={ () => dispatch( changeColor('tomato') )}>tomato</button>
                <button onClick={ () => dispatch( changeColor('lime') )}>lime</button>
            </p>
        </div>
    );
};

export default Color;