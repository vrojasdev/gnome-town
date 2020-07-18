import React from 'react';
import { Gnome } from '../../../../redux';
import Name from './name/name';
import Thumbnail from './thumbnail/thumbnail';
import Info from './info/info';

import classes from './Card.module.scss';

interface CardProps {
    index: number,
    info: Gnome,
    selected: number,
}

const Card = (props:CardProps) => {
    return (
        <div className={props.index === props.selected ? `${classes.card} ${classes.active}` : classes.card}>
            <Name name={props.info.name} />
            <Thumbnail thumbnail={props.info.thumbnail} />
            {props.index === props.selected &&
                <Info  
                    appeareance={{
                        age: props.info.age,
                        weight: props.info.weight,
                        height: props.info.height,
                        hairColor: props.info["hair_color"]
                    }}
                    professions={props.info.professions}
                    friends={props.info.friends}
                />
            }
        </div>
    )
}

export default React.memo(Card);