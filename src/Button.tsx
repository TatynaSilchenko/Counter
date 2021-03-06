import React from 'react';
import './App.css';
import s from "./Counter.module.css"
import {CounterStatusType} from "./Counter";

interface IButtonProps {
    title:string,
    setValue:(value:number)=>void,
    setStatus:(value:CounterStatusType)=>void,
    save?:()=>void,
    setStartValue?:(value:number)=>void,
    value:number,
    start?:number,
    maxtValue?:number,
    status:string,
}

function Button({title,setValue,value,start,maxtValue,status,setStatus,...restProps}:IButtonProps) {

    const onClickHandler=()=>{

        switch (title) {
            case'inc':
                return value&&setValue(value+1);
            case'reset':
                return value&&start&&setValue(start);

        }

        if (title==='set'){
                        setStatus('counter')
            start&&setValue(start)
            restProps.save&&restProps.save()
        }
    }

    const disabledButton=()=>{
        switch (title) {
            case'set':
                return status==='error'||status==='counter';
            case'inc':
                return value===maxtValue
            default:
                return false
        }
    }

    return (

        <div className={s.buttonWrapper}>
          <button className={s.title} onClick={onClickHandler} disabled={disabledButton()}>{title}</button>
        </div>
    );
}

export default Button;
