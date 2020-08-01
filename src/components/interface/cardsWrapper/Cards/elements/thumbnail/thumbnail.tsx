import React from 'react';
import classes from './thumbnail.module.scss';

export interface ThumbnailProps {
    thumbnail: string,
    inPreview: boolean
}

const Thumbnail = (props:ThumbnailProps) => {
    return (
        <div className={`${classes.thumbnail} ${props.inPreview && classes.preview}`}>
            <img src={props.thumbnail} alt="gnome picture" />
        </div>
    )
}

export default React.memo(Thumbnail);