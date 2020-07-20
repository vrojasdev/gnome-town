import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, TownActions, StatusActions, FilterActions } from './redux';
import Welcome from './components/welcome/welcome';
import Interface from './components/interface/interface';
import ErrorMsg from './components/errorMsg';
import { ProcessArrayInfo } from './helpers/filters';

import classes from './App.module.scss';

interface AppProps {
  townName:string,
  isLoading:boolean,
  setTownInfo: typeof TownActions.TownActions.setTownInfo,
  setLoading: typeof StatusActions.StatusActions.setLoading,
  setFilterReset: typeof FilterActions.FilterActions.setFilterResetValues,
  setFilterInitial: typeof FilterActions.FilterActions.clearActiveFilterValues
}

const mapStateToProps = (state:RootState) => {
  return {
    townName: state.town.name,
    isLoading: state.status.loading
  }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<AppProps, 'setTownInfo' | 'setLoading' | 'setFilterReset' | 'setFilterInitial' > => ({
  setTownInfo: bindActionCreators(TownActions.TownActions.setTownInfo, dispatch),
  setLoading: bindActionCreators(StatusActions.StatusActions.setLoading, dispatch),
  setFilterReset: bindActionCreators(FilterActions.FilterActions.setFilterResetValues, dispatch),
  setFilterInitial: bindActionCreators(FilterActions.FilterActions.clearActiveFilterValues, dispatch)
});

const App = (props:AppProps) => {
  // this flag helps us know if the initial data setting was successful or not
  const [errorLoading, setErrorLoading] = useState(false);

  // when the application first loads we get the data from the API
  // and set the Redux Store accordingly
  useEffect(() => {
    getTownData();
  }, []);
  
  const getTownData = async () => {
    const url = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";
    const headers = { 
      'Content-Type':'application/x-www-form-urlencoded'
    }
    try {
      const response = await fetch(url, { mode:'cors', headers: headers } );
      const data = await response.json();

      const name = Object.keys(data)[0];
      const population = data[`${name}`];

      // Call to HELPER function for getting the initial values for the filters
      const newFiltersData = ProcessArrayInfo(population);
      props.setFilterReset(newFiltersData);
      props.setFilterInitial();

      // stores the Name of the town and the whole population in the Redux Store
      props.setTownInfo({
        name: name,
        population: population
      });

      setTimeout(() => {
        //setDataLoaded(true);
        props.setLoading(false);
      }, 2500);
    }
    catch (e){
      setErrorLoading(true);
    }
  }

  return (
    <div className={classes.App}>
      {props.isLoading
        ? errorLoading 
          ? <ErrorMsg />
          : <Welcome townName={props.townName} />
        : <Interface />
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
