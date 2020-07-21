import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, StatusActions } from '../../../redux';
import Top from './top/top';
import ByName from './filters/byName/byName';
import ByAge from './filters/byAge/byAge';
import ByWeight from './filters/byWeight/byWeight';
import ByHeight from './filters/byHeight/byHeight';
import ByHairColor from './filters/byHairColor/byHairColor';
import ByProfessions from './filters/byProfessions/byProfessions';
import ScrollArea from 'react-scrollbar';

import classes from './searchPanel.module.scss';

interface SearchPanelProps {
     filtering:boolean,
     clearing: boolean,
     setClearing: typeof StatusActions.StatusActions.setClearFilters
}

const mapStateToProps = (state:RootState) => {
    return {
        filtering: state.status.filtering,
        clearing: state.status.clearFilters
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<SearchPanelProps, 'setClearing' > => ({
	setClearing: bindActionCreators(StatusActions.StatusActions.setClearFilters, dispatch)
});

const SearchPanel = (props:SearchPanelProps) => {
    const handleAfterClearingFilters = () => {
        if(props.clearing) {
            props.setClearing(false);
        }
    }
    
    return (
        <div className={`${classes.searchPanel} ${props.filtering && classes.visible} `}>
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