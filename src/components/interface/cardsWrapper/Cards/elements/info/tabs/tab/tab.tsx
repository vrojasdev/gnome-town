import React from 'react';
import classes from './tab.module.scss';
import { TabsContext } from '../../info';

export interface TabProps {
    currentTab:number,
    text:string,
}
 
const Tab = (props:TabProps) => {
    return (
        <TabsContext.Consumer>
            {( { tabActive, handleTabChange } ) => (
                <li 
                    className={tabActive === props.currentTab ? classes.active : ''} 
                    onClick={() => handleTabChange(props.currentTab)}
                >
                    {props.text}
                </li>                
            )}
        </TabsContext.Consumer>
    );
}
 
export default React.memo(Tab);