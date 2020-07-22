import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StatusActions } from '../../../redux/actions/statusActions';

import searchImg from '../../../assets/img/search.svg';
import classes from './topBar.module.scss';

interface TopBarProps {
    townName: string,
    selected: number,
    setPanelVisible: typeof StatusActions.setPanelVisible,
    setSelected: typeof StatusActions.setSelected
}

const mapStateToProps = (state:RootState) => {
    return {
        townName: state.town.name,
        selected: state.status.selected
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<TopBarProps, 'setPanelVisible' | 'setSelected' > => ({
    setPanelVisible: bindActionCreators(StatusActions.setPanelVisible, dispatch),
    setSelected: bindActionCreators(StatusActions.setSelected, dispatch)
});

const TopBar = (props:TopBarProps) => {
    const handleStartSearch = () => {
        // indicates that the Search Panel needs to be shown
        props.setPanelVisible(true);
        if(props.selected !== -1) {
            props.setSelected(-1);
        }
    }

    return (
        <div className={classes.topBar}>
            <div className={classes.townName}>{props.townName}</div>
            <div className={classes.search}>
                <img src={searchImg} onClick={handleStartSearch} />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TopBar));