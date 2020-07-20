import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import classes from './byHeight.module.scss';

interface ByHeightProps {
    handleAfterClearing: () => void,
    minHeightFilter: number,
    maxHeightFilter: number,
    clearFilter: boolean,
    setMinHeightFilter: typeof FilterActions.FilterActions.setFilterMinHeight,
    setMaxHeightFilter: typeof FilterActions.FilterActions.setFilterMaxHeight
}

const mapStateToProps = (state:RootState) => {
    return {
        minHeightFilter: state.filters.resetValues.minHeight,
        maxHeightFilter: state.filters.resetValues.maxHeight,
        clearFilter: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByHeightProps, 'setMinHeightFilter' | 'setMaxHeightFilter' > => ({
    setMinHeightFilter: bindActionCreators(FilterActions.FilterActions.setFilterMinHeight, dispatch),
    setMaxHeightFilter: bindActionCreators(FilterActions.FilterActions.setFilterMaxHeight, dispatch)
});

const ByHeight = (props:ByHeightProps) => {
    const [value, setValue] = useState({ min:props.minHeightFilter, max:props.maxHeightFilter });

    useEffect(() => {
        setValue({ min:props.minHeightFilter, max:props.maxHeightFilter });
        props.handleAfterClearing();
    }, [props.clearFilter]);

    const handleChange = (val:any) => {
        setValue({
            min: val.min,
            max: val.max
        });
    }

    const updateFilters = () => {
        props.setMinHeightFilter(value.min);
        props.setMaxHeightFilter(value.max);
    }

    return (
        <div className={classes.byHeight}>
            <label htmlFor="slide-height">Height</label>
            <div id="slide-height" className={classes['slide-height']}>
                <InputRange 
                    minValue={props.minHeightFilter}
                    maxValue={props.maxHeightFilter}
                    value={value}
                    onChange={value => handleChange(value)}
                    onChangeComplete={updateFilters}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ByHeight));