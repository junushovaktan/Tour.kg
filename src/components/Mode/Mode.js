import { useSelector, useDispatch } from 'react-redux'
import {changeMode} from '../../features/mode/modeSlice'
import classes from './Mode.module.css'


function Mode() {
    const mode = useSelector((state) => state.mode.current)
    const dispatch = useDispatch()

    let changeModeText = mode === "day" ? "Ночной режим" : "Дневной режим"
    
    const buttonHandler = () => {
        dispatch(changeMode())
    }
    return (
    <div className={classes.but}>
        <button onClick={buttonHandler} className = {classes.button}>{ changeModeText }</button>
    </div>
    )
    
}


export default Mode;