import React, {ChangeEvent, useState} from 'react';
import './App.css';
import s from "./Counter.module.css"
import {CounterStatusType} from "./Counter";

interface IInputType {
    value?: number,
    maxValue: number,
    title: string,
    status: CounterStatusType,
    setValue: (value: number) => void,
    setStatus: (value: CounterStatusType) => void,
    setStartValue: (value: number) => void


}

function Input({setStatus, setValue, value, status, maxValue, ...props}: IInputType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue=+e.currentTarget.value
        setStatus('setting')
        value && value < 0 && setStatus('error')
        props.title==='start value'&&props.setStartValue(newValue)
        setValue(newValue)
    }


    return (
        <div className={s.inputWrapper}>
            <span className={s.title}> {props.title}</span>
            <input type="number"
                   className={(value && value < 0 )? `${s.inputValue} ${s.inputError}` : s.inputValue}
                   value={value || value === 0 ? value : maxValue} onChange={onChangeHandler}/>
        </div>
    );
}

export default Input;
