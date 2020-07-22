import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';
import CheckboxGroup from 'react-checkbox-group';

import classes from './byProfessions.module.scss';

interface ByProfessionsProps {
    handleAfterClearing: () => void,
    professions: Array<string>,
    clearFilter: boolean,
    setProfessions: typeof FilterActions.FilterActions.setFilterProfessions
}

const mapStateToProps = (state:RootState) => {
    return {
        professions: state.filters.initialValues.professions,
        clearFilter: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByProfessionsProps, 'setProfessions' > => ({
    setProfessions: bindActionCreators(FilterActions.FilterActions.setFilterProfessions, dispatch)
});

const ByProfessions = (props:ByProfessionsProps) => {
    const [professions, setProfessions] = useState([] as any);
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        firstLoad ? setFirstLoad(false) : setProfessions([]); 
        props.handleAfterClearing();
    }, [props.clearFilter]);

    const handleChange = (val:any) => {
        // set the new values for the Professions filter
        if(professions !== val) {
            setProfessions(val);
            props.setProfessions(val);
        }
    }

    return (
        <div className={classes.byProfessions}>
            <label htmlFor="professions">Professions</label>
            <div id="professions" className={classes['professions']}>
                <CheckboxGroup name="professions" value={professions} onChange={handleChange}>
                    {(Checkbox) => (
                        <>
                            {props.professions.map(profession => 
                                <label key={profession}>
                                    <Checkbox value={profession} /> {profession}
                                </label>
                            )}
                        </>
                    )}
                </CheckboxGroup>
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ByProfessions));