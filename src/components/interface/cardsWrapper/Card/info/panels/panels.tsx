import React from 'react';
import { InfoProps } from '../info';
import PanelAppeareance from './panelAppeareance/panelAppeareance';
import PanelProfessions from './panelProfessions/panelProfessions';
import PanelFriends from './panelFriends/panelFriends';

import classes from './panels.module.scss';

interface PanelsProps extends InfoProps {
    active:number
}

const Panels = (props:PanelsProps) => {
    return (
        <div className={classes.panels}>
            { props.active === 0 && <PanelAppeareance appeareance={props.appeareance} /> }
            { props.active === 1 && <PanelProfessions professions={props.professions} /> }
            { props.active === 2 && <PanelFriends friends={props.friends} /> }
        </div>
    )
}

export default React.memo(Panels);