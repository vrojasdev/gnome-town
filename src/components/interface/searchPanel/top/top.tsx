import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StatusActions } from '../../../../redux';

import closeBtn from '../../../../assets/img/close.svg';
import classes from './top.module.scss';

interface TopProps {
    setFiltering: typeof StatusActions.StatusActions.setFiltering
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<TopProps, 'setFiltering' > => ({
	setFiltering: bindActionCreators(StatusActions.StatusActions.setFiltering, dispatch)
});

const Top = (props:TopProps) => {
    const handleClearFilters = () => {
        //  put all filters back to their default value
    }

    return (
        <div className={classes.top}>
            <div 
                className={classes.closeBtn}
                onClick={() => props.setFiltering(false)}
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