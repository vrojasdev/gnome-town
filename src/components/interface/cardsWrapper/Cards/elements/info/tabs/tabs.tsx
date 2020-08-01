import React from 'react';
import Tab from './tab/tab';
import classes from './tabs.module.scss';

const Tabs = () => {
    const tabsAvailable = ['Appeareance', 'Professions', 'Friends'];

    return(
        <div className={classes.tabs}>
            <ul>
                {
                    tabsAvailable.map((tab, i) => <Tab 
                        key={i}
                        currentTab={i}
                        text={tab}
                    />)
                }
            </ul>
        </div>
    )
}

export default React.memo(Tabs);