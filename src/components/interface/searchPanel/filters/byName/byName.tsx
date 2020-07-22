import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions, RootState } from '../../../../../redux';

import classes from './byName.module.scss';

interface ByNameProps {
    nameFilter: string,
    setFilterName: typeof FilterActions.FilterActions.setFilterName
}

const mapStateToProps = (state:RootState) => {
    return {
        nameFilter: state.filters.active.name
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByNameProps, 'setFilterName' > => ({
	setFilterName: bindActionCreators(FilterActions.FilterActions.setFilterName, dispatch)
});

const ByName = (props:ByNameProps) => {
    const [name, setName] = useState('');
    const [filterApplied, setFilterApplied] = useState(true);

    useEffect(() => {
        setName(props.nameFilter);
    }, [props.nameFilter]);

    const handleApplyFilter = () => { 
        // set the new values for the Name filter
        props.setFilterName(name);
        setFilterApplied(true);
    }

    const handleKeyDown = (e:any) => {
        // here we handle if we press Enter, to directly apply the filter
        if(e.keyCode === 13) {
            handleApplyFilter();
        }
    }

    const handleNameChange = (value:string) => {
        setName(value);
        if(filterApplied) {
            setFilterApplied(false);
        }        
    }

    return (
        <div className={classes.row}>
            <label htmlFor="name-filter">Name</label>
            <input 
                id="name-filter"
                placeholder="search by name..." 
                onKeyDown={handleKeyDown}
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
            />
            {!filterApplied &&
                <button onClick={handleApplyFilter} >
                    APPLY
                </button>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ByName));