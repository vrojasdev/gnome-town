import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { FilterActions } from '../../../../../redux';

import doneImg from '../../../../../assets/img/done.svg';
import classes from './byName.module.scss';

interface ByNameProps {
    setFilterName: typeof FilterActions.FilterActions.setFilterName
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<ByNameProps, 'setFilterName' > => ({
	setFilterName: bindActionCreators(FilterActions.FilterActions.setFilterName, dispatch)
});

const ByName = (props:ByNameProps) => {
    const [name, setName] = useState('');
    const [filterApplied, setFilterApplied] = useState(true);

    const handleApplyFilter = () => { 
        props.setFilterName(name);
        setFilterApplied(true);
    }

    const handleKeyDown = (e:any) => {
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
                onChange={(e) => handleNameChange(e.target.value)}
            />
            {!filterApplied &&
                <img src={doneImg} 
                    alt="apply filter" 
                    onClick={handleApplyFilter}
            /> }
        </div>
    )
}

export default connect(null, mapDispatchToProps)(React.memo(ByName));