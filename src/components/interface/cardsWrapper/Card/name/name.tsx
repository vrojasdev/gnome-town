import React from 'react';
import classes from './name.module.scss';

interface NameProps {
    name: string,
    inPreview: boolean
}

const Name = (props:NameProps) => {
    return (
        <div className={`${classes.name} ${props.inPreview && classes.preview}`}>
            {props.name}
        </div>
    )
}

export default React.memo(Name);