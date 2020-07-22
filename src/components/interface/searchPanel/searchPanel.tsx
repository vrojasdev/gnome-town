import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, StatusActions, FilterOptions, Gnome, ResultsActions } from '../../../redux';
import Top from './top/top';
import ByName from './filters/byName/byName';
import ByAge from './filters/byAge/byAge';
import ByWeight from './filters/byWeight/byWeight';
import ByHeight from './filters/byHeight/byHeight';
import ByHairColor from './filters/byHairColor/byHairColor';
import ByProfessions from './filters/byProfessions/byProfessions';
import ScrollArea from 'react-scrollbar';
import { generateNewActiveArray } from '../../../helpers/results';

import classes from './searchPanel.module.scss';

interface SearchPanelProps extends FilterOptions {
     panelVisible:boolean,
     clearing: boolean,
     activeFilters: FilterOptions,
     resetFilters: FilterOptions,
     population: Array<Gnome>,
     results: any,
     setClearing: typeof StatusActions.StatusActions.setClearFilters,
     setActiveResults: typeof ResultsActions.ResultsActions.setActiveResults
}

const mapStateToProps = (state:RootState) => {
    return {
        panelVisible: state.status.panelVisible,
        clearing: state.status.clearFilters,
        activeFilters: state.filters.active,
        resetFilters: state.filters.resetValues,
        population: state.town.population,
        results: state.results.initial,
        name: state.filters.active.name,
        minAge: state.filters.active.minAge,
        maxAge: state.filters.active.maxAge,
        minWeight: state.filters.active.minWeight,
        maxWeight: state.filters.active.maxWeight,
        minHeight: state.filters.active.minHeight,
        maxHeight: state.filters.active.maxHeight,
        hairColor: state.filters.active.hairColor,
        professions: state.filters.active.professions
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<SearchPanelProps, 'setClearing' | 'setActiveResults' > => ({
    setClearing: bindActionCreators(StatusActions.StatusActions.setClearFilters, dispatch),
    setActiveResults: bindActionCreators(ResultsActions.ResultsActions.setActiveResults, dispatch)
});

const SearchPanel = (props:SearchPanelProps) => {
    useEffect(() => {
        // every time we detect a change in any filter value, we call the helper function "generateNewActiveArray"
        // to apply the filters and generate the new values to be displayed in the interface
        const newResults = generateNewActiveArray(props.population, props.activeFilters, props.resetFilters, props.results);
        props.setActiveResults(newResults);
    }, [props.name,
        props.minAge,
        props.maxAge,
        props.minWeight,
        props.maxWeight,
        props.minHeight,
        props.maxHeight,
        props.hairColor,
        props.professions]    
    );

    const handleAfterClearingFilters = () => {
        // set all filters back to the default values
        if(props.clearing) {
            props.setClearing(false);
        }
    }
    
    return (
        <div className={`${classes.searchPanel} ${props.panelVisible && classes.visible} `}>
            <ScrollArea horizontal={false} style={{height:'100vh', width:'100%'}} stopScrollPropagation={true}>
                <div className={classes.innerWrapper}>
                    <Top />
                    <ByName />
                    <ByAge handleAfterClearing={handleAfterClearingFilters} />
                    <ByWeight handleAfterClearing={handleAfterClearingFilters} />
                    <ByHeight handleAfterClearing={handleAfterClearingFilters} />
                    <ByHairColor handleAfterClearing={handleAfterClearingFilters} />
                    <ByProfessions handleAfterClearing={handleAfterClearingFilters} />
                </div>
            </ScrollArea>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SearchPanel));