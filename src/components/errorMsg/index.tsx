import React from 'react';
import classes from './errorMsg.module.scss';

const ErrorMsg = () => {
    return (
        <div className={classes.error}>
            There was an error getting the data.
            <br />
            Please try again later
        </div>
    )
}

export default ErrorMsg;