import React from 'react';
import lazy from '../../../../../../../../assets/img/lazy.png';

import classes from './panelProfessions.module.scss';

interface PanelProfessionsProps {
    professions: Array<string>
}

const PanelFriends = (props:PanelProfessionsProps) => {
    return (
        <div className={classes.professions}>
            {props.professions.length > 0 
                ?   props.professions.map(
                        (profession, i) => <div className={classes.row} key={i}>{profession}</div>
                    )
                : <img src={lazy} alt="no thanks" />
            }
        </div>
    )
}

export default React.memo(PanelFriends);