import React from 'react';
import TopBar from './topBar/topBar';
import CardsWrapper from './cardsWrapper/cardsWrapper';
import SearchPanel from './searchPanel/searchPanel';

import classes from './interface.module.scss';

const Interface = () => {
    return (
        <div className={classes.interface}>
            <TopBar />
            <CardsWrapper />
            <SearchPanel />
        </div>
    )
}

export default React.memo(Interface);