import React, {useState} from 'react';
import './App.css';
import s from "./Counter.module.css"
import Input from "./Input";
import Button from "./Button";
import {debuglog} from "util";

export type CounterStatusType = 'counter' | 'setting' | 'error'

function Counter() {
    const [startValue, setStartValue] = useState(5)
    const [maxtValue, setMaxValue] = useState(10)
    const [value, setValue] = useState(startValue)
    const [status, setStatus] = useState<CounterStatusType>('counter')

    return (
        <div className={s.counterWrapper}>
            <div className={s.settings}>
                <div className={s.block}>
                    <Input maxValue={maxtValue} setValue={setMaxValue} title={'max value'} setStatus={setStatus}
                           status={status} setStartValue={setStartValue}/>
                    <Input value={startValue} setValue={setValue} maxValue={maxtValue} title={'start value'}
                           status={status} setStatus={setStatus} setStartValue={setStartValue}/>
                </div>
                <div className={s.block}>
                    <Button title={'set'} value={value} setValue={setValue} status={status} setStatus={setStatus}  start={startValue}/>
                </div>
            </div>
            <div className={s.settings}>
                <div className={s.block}>
             <span className={value === maxtValue ? `${s.currentValue} ${s.disabled}` : s.currentValue}>
                 {status === 'counter' ? value : 'enter value and press "set" '}

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
