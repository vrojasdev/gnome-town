import React from 'react';
import classes from './thumbnail.module.scss';

interface ThumbnailProps {
    thumbnail: string
}

const Thumbnail = (props:ThumbnailProps) => {
    return (
        <div className={classes.thumbnail}>
            <img src={props.thumbnail} alt="gnome picture" />
        </div>
    )
}

export default React.memo(Thumbnail);