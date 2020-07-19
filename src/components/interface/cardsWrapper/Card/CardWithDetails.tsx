import React from 'react';
import { Gnome } from '../../../../redux';
import Name from './name/name';
import Thumbnail from './thumbnail/thumbnail';
import Info from './info/info';

import classes from './CardWithDetails.module.scss';

interface CardWithDetailsProps {
    index: number,
    info: Gnome
}

const CardWithDetails = (props:CardWithDetailsProps) => {
    return (
        <div className={classes.cardWithDetails}>
            <Name name={props.info.name} inPreview={false} />
            <Thumbnail thumbnail={props.info.thumbnail} inPreview={false} />
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
        </div>
    )
}

export default React.memo(CardWithDetails);