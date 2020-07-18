import React from 'react';
import classes from './tabs.module.scss';

interface TabsProps {
    handleTabChange: (index:number) => void;
}

const Tabs = (props:TabsProps) => {
    return(
        <div className={classes.tabs}>
            <ul>
                <li onClick={() => props.handleTabChange(0)}>
                    Appeareance
                </li>
                <li onClick={() => props.handleTabChange(1)}>
                    Professions
                </li>
                <li onClick={() => props.handleTabChange(2)}>
                    Friends
                </li>
            </ul>
        </div>
    )
}

export default React.memo(Tabs);