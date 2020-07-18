import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, TownActions, StatusActions } from './redux';
import Welcome from './components/welcome/welcome';
import Interface from './components/interface/interface';
import ErrorMsg from './components/errorMsg';

import classes from './App.module.scss';

interface AppProps {
  townName:string,
  isLoading:boolean,
  setTownInfo: typeof TownActions.TownActions.setTownInfo,
  setLoading: typeof StatusActions.StatusActions.setLoading
}

const mapStateToProps = (state:RootState) => {
  return {
    townName: state.town.name,
    isLoading: state.status.loading
  }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<AppProps, 'setTownInfo' | 'setLoading' > => ({
  setTownInfo: bindActionCreators(TownActions.TownActions.setTownInfo, dispatch),
  setLoading: bindActionCreators(StatusActions.StatusActions.setLoading, dispatch)
});

const App = (props:AppProps) => {
  const [errorLoading, setErrorLoading] = useState(false);

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

      // CREATE A HELPER FUNCTION TO PROCESS THE DATA

      const name = Object.keys(data)[0];
      const population = data[`${name}`];

      props.setTownInfo({
        name: name,
        population: population
      })

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
      {/* {!dataLoaded
        ? errorLoading 
          ? <ErrorMsg />
          : <Welcome townName={props.townName} />
        : <Interface />
      } */}
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
