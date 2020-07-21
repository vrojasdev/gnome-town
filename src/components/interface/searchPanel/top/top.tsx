import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StatusActions, FilterActions } from '../../../../redux';

import closeBtn from '../../../../assets/img/close.svg';
import classes from './top.module.scss';

interface TopProps {
    setPanelVisible: typeof StatusActions.StatusActions.setPanelVisible,
    clearing: typeof StatusActions.StatusActions.setClearFilters,
    clearFilters: typeof FilterActions.FilterActions.clearActiveFilterValues
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<TopProps, 'setPanelVisible' | 'clearFilters' | 'clearing' > => ({
    setPanelVisible: bindActionCreators(StatusActions.StatusActions.setPanelVisible, dispatch),
    clearFilters: bindActionCreators(FilterActions.FilterActions.clearActiveFilterValues, dispatch),
    clearing: bindActionCreators(StatusActions.StatusActions.setClearFilters, dispatch)
});

const Top = (props:TopProps) => {
    const handleClearFilters = () => {
        //  put all filters back to their default value
        props.clearFilters();
        props.clearing(true);
    }

    return (
        <div className={classes.top}>
            <div 
                className={classes.closeBtn}
                onClick={() => props.setPanelVisible(false)}
            >
                <img src={closeBtn} alt="close" />
            </div>
            <button 
                className={classes.clearBtn}
                onClick={handleClearFilters}
            >
                Clear Filters
            </button>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(React.memo(Top));