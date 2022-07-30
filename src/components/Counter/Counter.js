import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'
import classes from './Counter.module.css'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
          <div className={classes.all}>
            <button onClick={() => dispatch(increment())} className= {classes.but}>
              Increment
            </button><br/>
            <span className={classes.span}>{count}</span><br/>
            <button onClick={() => dispatch(decrement())} className = {classes.but}>
              Decrement
            </button><br/>
          </div>
        </div>
      )

}