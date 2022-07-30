import Mode from "../Mode/Mode";
import classes from './Profile.module.css'

export default function Profile({mode, setMode}) {
    return (
    <div>
        <h1 className={classes.h1}>Профиль пользователя</h1>
        <p className={classes.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dignissimos id, asperiores non et expedita voluptates velit sequi quae voluptatibus similique iste ad, veniam ipsa doloremque accusamus labore! Ut, placeat?</p>
        <Mode/>    
    </div>)
}