import React from 'react';
import Name from './name/name';
import Thumbnail from './thumbnail/thumbnail';

import classes from './Card.module.scss';

interface CardProps {
    index: number,
    gnomeName: string,
    gnomeThumbnail: string,
    selected: number,
    handleClick: (i:number) => void,
}

const Card = (props:CardProps) => {
    return (
        <div 
            className={props.index === props.selected ? `${classes.card} ${classes.active}` : classes.card}
            onClick={() => props.handleClick(props.index)}
        >
            <Thumbnail thumbnail={props.gnomeThumbnail} inPreview={true} />
            <Name name={props.gnomeName} inPreview={true} />
        </div>
    )
}

export default React.memo(Card);