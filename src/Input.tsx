import React, {ChangeEvent, useState} from 'react';
import './App.css';
import s from "./Counter.module.css"
import {CounterStatusType} from "./Counter";

interface IInputType {
    value?: number,
    maxValue: number,
    startValue:number,
    title: string,
    status: CounterStatusType,
    setValue: (value: number) => void,
    setStatus: (value: CounterStatusType) => void,
    setStartValue: (value: number) => void


}

function Input({setStatus, setValue, value, status, maxValue,startValue,title, ...props}: IInputType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        const newValue=+e.currentTarget.value
        if (title==='start value'){
            if (newValue>=maxValue){
                props.setStartValue(newValue)
                setStatus('error')
            } else {
                setStatus('setting')
                props.setStartValue(newValue)}
        }

        if (title==='max value'){
            if (newValue<=startValue){
                setValue(newValue)
                setStatus('error')
            } else {
                setStatus('setting')
               setValue(newValue)}
        }

        setValue(newValue)
        value && (value < 0) && setStatus('error')
        }



    return (
        <div className={s.inputWrapper}>
            <span className={s.title}> {title}</span>
            <input type="number"
                   className={status==='error'? `${s.inputValue} ${s.inputError}` : s.inputValue}
                   value={value || value === 0 ? value : maxValue} onChange={onChangeHandler}/>
        </div>
    );
}

export default Input;
