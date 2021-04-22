import React, {useEffect, useState} from 'react';
import './App.css';
import s from "./Counter.module.css"
import Input from "./Input";
import Button from "./Button";
import {restoreState, saveState} from "./localstorage";


export type CounterStatusType = 'counter' | 'setting' | 'error'

function Counter() {
    const [startValue, setStartValue] = useState(5)
    const [maxtValue, setMaxValue] = useState(10)
    const [value, setValue] = useState(startValue)
    const [status, setStatus] = useState<CounterStatusType>('counter')

    const save = () => {
        saveState<number>('start-value', startValue)
        saveState<number>('max-value', maxtValue)
    }

    const restore = () => {
        // setValue()
        const newStartValue= restoreState('start-value',startValue)
        const newMaxValue= restoreState('max-value',maxtValue)
        setStartValue(newStartValue)
        setMaxValue(newMaxValue)
        setValue(newStartValue)
    }
    useEffect(()=>restore(),[])
    return (
        <div className={s.counterWrapper}>
            <div className={s.settings}>
                <div className={s.block}>
                    <Input startValue={startValue} maxValue={maxtValue} setValue={setMaxValue} title={'max value'} setStatus={setStatus}
                           status={status} setStartValue={setStartValue}/>
                    <Input startValue={startValue} value={startValue} setValue={setValue} maxValue={maxtValue} title={'start value'}
                           status={status} setStatus={setStatus} setStartValue={setStartValue}/>
                </div>
                <div className={s.block}>
                    <Button title={'set'} value={value} setValue={setValue} status={status} setStatus={setStatus} save={save} start={startValue}/>
                </div>
            </div>
            <div className={s.settings}>
                <div className={s.block}>
             <span className={value === maxtValue ? `${s.currentValue} ${s.disabled}` : s.currentValue}>
                 {status === 'counter' ? value :status === 'setting'?'enter value and press "set" ':'Incorrect value!'}

             </span>
                </div>
                <div className={s.block}>
                    <Button title={'inc'} setValue={setValue} value={value} maxtValue={maxtValue} status={status} setStatus={setStatus}/>
                    <Button title={'reset'} setValue={setValue} value={value} start={startValue} status={status}  setStatus={setStatus}/>
                </div>
            </div>
        </div>
    );
}

export default Counter;
