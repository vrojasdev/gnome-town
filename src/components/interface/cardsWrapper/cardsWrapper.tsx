import React from 'react';
import { connect } from 'react-redux';
import { RootState, Gnome } from '../../../redux';
import Card from './Card/Card';

import classes from './cardsWrapper.module.scss';

interface CardsWrapperProps {
    population: Array<Gnome>,
    arrayOfActive: Array<number>,
    filtering: boolean,
    gnomeSelected: number    
}

const mapStateToProps = (state:RootState) => {
    return {
        population: state.town.population,
        arrayOfActive: state.results.active,
        filtering: state.status.filtering,
        gnomeSelected: state.status.selected
    }
}

const CardsWrapper = (props:CardsWrapperProps) => {
    return (
        <div className={classes.cardsWrapper}>
            <div className={classes.innerWrapper}>
                {props.population.map(
                    gnome => <Card 
                        key={gnome.id} 
                        index={gnome.id}
                        info={gnome} 
                        selected={props.gnomeSelected} 
                    />
                )}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(React.memo(CardsWrapper));