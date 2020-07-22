import React from 'react';
import classes from './tabs.module.scss';

export interface TabsProps {
    handleTabChange: (index:number) => void,
    tabActive: number
}

const Tabs = (props:TabsProps) => {
    return(
        <div className={classes.tabs}>
            <ul>
                <li 
                    className={`${props.tabActive === 0 && classes.active}`} 
                    onClick={() => props.handleTabChange(0)}
                >
                    Appeareance
                </li>
                <li 
                    className={`${props.tabActive === 1 && classes.active}`} 
                    onClick={() => props.handleTabChange(1)}
                >
                    Professions
                </li>
                <li 
                    className={`${props.tabActive === 2 && classes.active}`} 
                    onClick={() => props.handleTabChange(2)}
                >
                    Friends
                </li>
            </ul>
        </div>
    )
}

export default React.memo(Tabs);