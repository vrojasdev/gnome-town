import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../../redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StatusActions } from '../../../redux/actions/statusActions';

import searchImg from '../../../assets/img/search.svg';
import classes from './topBar.module.scss';

interface TopBarProps {
    townName: string,
    setFiltering: typeof StatusActions.setFiltering,
    setSelected: typeof StatusActions.setSelected
}

const mapStateToProps = (state:RootState) => {
    return {
        townName: state.town.name
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<TopBarProps, 'setFiltering' | 'setSelected' > => ({
    setFiltering: bindActionCreators(StatusActions.setFiltering, dispatch),
    setSelected: bindActionCreators(StatusActions.setSelected, dispatch)
});

const TopBar = (props:TopBarProps) => {
    const handleStartSearch = () => {
        props.setFiltering(true);
        props.setSelected(-1);
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