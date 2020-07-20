import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import classes from './byAge.module.scss';

interface ByAgeProps {
    handleAfterClearing: () => void,
    minAgeFilter: number,
    maxAgeFilter: number,
    clearFilter: boolean,
    setMinAgeFilter: typeof FilterActions.FilterActions.setFilterMinAge,
    setMaxAgeFilter: typeof FilterActions.FilterActions.setFilterMaxAge
}

const mapStateToProps = (state:RootState) => {
    return {
        minAgeFilter: state.filters.resetValues.minAge,
        maxAgeFilter: state.filters.resetValues.maxAge,
        clearFilter: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByAgeProps, 'setMinAgeFilter' | 'setMaxAgeFilter' > => ({
    setMinAgeFilter: bindActionCreators(FilterActions.FilterActions.setFilterMinAge, dispatch),
    setMaxAgeFilter: bindActionCreators(FilterActions.FilterActions.setFilterMaxAge, dispatch)
});

const ByAge = (props:ByAgeProps) => {
    const [value, setValue] = useState({ min:props.minAgeFilter, max:props.maxAgeFilter });

    useEffect(() => {
        setValue({ min:props.minAgeFilter, max:props.maxAgeFilter });
        // here we call to the parent function (in searchPanel) to 
        // put the flag 'clearFilters' back to FALSE, for the next time it changes
        props.handleAfterClearing();
    }, [props.clearFilter]);

    const handleChange = (val:any) => {
        setValue({
            min: val.min,
            max: val.max
        });
    }

    const updateFilters = () => {
        props.setMinAgeFilter(value.min);
        props.setMaxAgeFilter(value.max);
    }

    return (
        <div className={classes.byAge}>
            <label htmlFor="slide-age">Age</label>
            <div id="slide-age" className={classes['slide-age']}>
                <InputRange 
                    minValue={props.minAgeFilter}
                    maxValue={props.maxAgeFilter}
                    value={value}
                    onChange={value => handleChange(value)}
                    onChangeComplete={updateFilters}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ByAge));