import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../../redux';
import Top from './top/top';
import ByName from './filters/byName/byName';

import classes from './searchPanel.module.scss';

interface SearchPanelProps {
     filtering:boolean,
}

const mapStateToProps = (state:RootState) => {
    return {
        filtering: state.status.filtering
    }
}

/*const mapDispatchToProps = (dispatch:Dispatch): Pick<SearchPanelProps, 'setSelected' > => ({
	setSelected: bindActionCreators(StatusActions.StatusActions.setSelected, dispatch)
});*/

const SearchPanel = (props:SearchPanelProps) => {
    return (
        <div className={`${classes.searchPanel} ${props.filtering && classes.visible} `}>
            <Top />
            <ByName />
        </div>
    )
}

export default connect(mapStateToProps)(React.memo(SearchPanel));