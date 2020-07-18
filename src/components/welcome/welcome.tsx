import React from 'react';
import classes from './welcome.module.scss';

interface WelcomeProps {
    townName: string
}

const Welcome = (props:WelcomeProps) => {
    return (
        <div className={classes.welcome}>
            {props.townName === ''
                ? '...'
                : <div className={classes.message}>
                    Welcome to <br />{props.townName}
                </div>
            }
        </div>
    )
}

export default React.memo(Welcome);