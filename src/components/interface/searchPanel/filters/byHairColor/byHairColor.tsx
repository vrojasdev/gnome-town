import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';
import CheckboxGroup from 'react-checkbox-group';

import classes from './byHairColor.module.scss';

interface ByHairColorProps {
    handleAfterClearing: () => void,
    hairColors: Array<string>,
    clearFilter: boolean,
    setHairColors: typeof FilterActions.FilterActions.setFilterHairColor
}

const mapStateToProps = (state:RootState) => {
    return {
        hairColors: state.filters.initialValues.hairColor,
        clearFilter: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByHairColorProps, 'setHairColors' > => ({
    setHairColors: bindActionCreators(FilterActions.FilterActions.setFilterHairColor, dispatch)
});

const ByHairColor = (props:ByHairColorProps) => {
    const [colors, setColors] = useState([] as any);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        firstLoad ? setFirstLoad(false) : setColors([]);        
        props.handleAfterClearing();
    }, [props.clearFilter]);

    const handleChange = (val:any) => {
        // set the new values for the HairColor filter
        if(colors !== val) {
            setColors(val);
            props.setHairColors(val);
        }
    }

    return (
        <div className={classes.byHairColor}>
            <label htmlFor="hair-colors">Hair Color</label>
            <div id="hair-colors" className={classes['hair-colors']}>
                <CheckboxGroup name="colors" value={colors} onChange={handleChange}>
                    {(Checkbox) => (
                        <>
                            {props.hairColors.map(color => 
                                <label key={color}>
                                    <Checkbox value={color} /> {color}
                                </label>
                            )}
                        </>
                    )}
                </CheckboxGroup>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ByHairColor));