import React from 'react';

import classes from './panelFriends.module.scss';

interface PanelFriendsProps {
    friends: Array<string>
}

const PanelFriends = (props:PanelFriendsProps) => {
    return (
        <div className={classes.friends}>
            {props.friends.map(
                (friend, i) => <div className={classes.row} key={i}>{friend}</div>
            )}
        </div>
    )
}

export default React.memo(PanelFriends);