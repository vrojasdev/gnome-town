import React from 'react';
import classes from './name.module.scss';

interface NameProps {
    name: string
}

const Name = (props:NameProps) => {
    return (
        <div className={classes.name}>
            {props.name}
        </div>
    )
}

export default React.memo(Name);