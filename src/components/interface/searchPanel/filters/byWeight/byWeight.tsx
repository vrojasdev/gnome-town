import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import classes from './byWeight.module.scss';

interface ByWeightProps {
    handleAfterClearing: () => void,
    minWeightFilter: number,
    maxWeightFilter: number,
    clearFilter: boolean,
    setMinWeightFilter: typeof FilterActions.FilterActions.setFilterMinWeight,
    setMaxWeightFilter: typeof FilterActions.FilterActions.setFilterMaxWeight
}

const mapStateToProps = (state:RootState) => {
    return {
        minWeightFilter: state.filters.resetValues.minWeight,
        maxWeightFilter: state.filters.resetValues.maxWeight,
        clearFilter: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByWeightProps, 'setMinWeightFilter' | 'setMaxWeightFilter' > => ({
    setMinWeightFilter: bindActionCreators(FilterActions.FilterActions.setFilterMinWeight, dispatch),
    setMaxWeightFilter: bindActionCreators(FilterActions.FilterActions.setFilterMaxWeight, dispatch)
});

const ByWeight = (props:ByWeightProps) => {
    const [value, setValue] = useState({ min:props.minWeightFilter, max:props.maxWeightFilter });

    useEffect(() => {
        setValue({ min:props.minWeightFilter, max:props.maxWeightFilter });
        props.handleAfterClearing();
    }, [props.clearFilter]);

    const handleChange = (val:any) => {
        setValue({
            min: val.min,
            max: val.max
        });
    }

    const updateFilters = () => {
        props.setMinWeightFilter(value.min);
        props.setMaxWeightFilter(value.max);
    }

    return (
        <div className={classes.byWeight}>
            <label htmlFor="slide-weight">Weight</label>
            <div id="slide-weight" className={classes['slide-weight']}>
                <InputRange 
                    minValue={props.minWeightFilter}
                    maxValue={props.maxWeightFilter}
                    value={value}
                    onChange={value => handleChange(value)}
                    onChangeComplete={updateFilters}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ByWeight));