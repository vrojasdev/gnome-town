import React from 'react';
import loneWolf from '../../../../../../../../assets/img/lone-wolf.png';

import classes from './panelFriends.module.scss';

interface PanelFriendsProps {
    friends: Array<string>
}

const PanelFriends = (props:PanelFriendsProps) => {
    return (
        <div className={classes.friends}>
            {props.friends.length > 0
            ?   props.friends.map(
                    (friend, i) => <div className={classes.row} key={i}>{friend}</div>
                )
            : <img src={loneWolf} alt="lone wolf" />
            }
        </div>
    )
}

export default React.memo(PanelFriends);