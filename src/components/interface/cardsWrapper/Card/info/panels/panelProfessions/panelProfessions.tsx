import React from 'react';

import classes from './panelProfessions.module.scss';

interface PanelProfessionsProps {
    professions: Array<string>
}

const PanelFriends = (props:PanelProfessionsProps) => {
    return (
        <div className={classes.professions}>
            {props.professions.map(
                (profession, i) => <div className={classes.row} key={i}>{profession}</div>
            )}
        </div>
    )
}

export default React.memo(PanelFriends);