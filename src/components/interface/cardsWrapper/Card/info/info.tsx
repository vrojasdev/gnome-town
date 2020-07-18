import React, { useState } from 'react';
import Tabs from './tabs/tabs';
import Panels from './panels/panels';

import classes from './info.module.scss';

export interface Appeareance {
    age: number,
    weight: number,
    height: number,
    hairColor: string
}

export interface InfoProps {
    appeareance: Appeareance,
    professions: Array<string>,
    friends: Array<string>
}

const Info = (props:InfoProps) => {
    const [panelActive, setPanelActive] = useState(0);

    const handleTabChange = (tabIndex:number) => {
        setPanelActive(tabIndex);
    }

    return (
        <div className={classes.info}>
            <Tabs handleTabChange={handleTabChange} />
            <Panels 
                active={panelActive}
                appeareance={props.appeareance}
                professions={props.professions}
                friends={props.friends}
            />
        </div>
    )
}

export default React.memo(Info);