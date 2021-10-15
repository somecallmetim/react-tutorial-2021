import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(){
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required={true} id='title' />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required={true} id='image' />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required={true} id='address' />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required={true} id='description' rows='5'></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;