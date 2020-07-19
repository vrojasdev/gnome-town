import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, Gnome, StatusActions } from '../../../redux';
import Card from './Card/Card';
import CardWithDetails from './Card/CardWithDetails';

import classes from './cardsWrapper.module.scss';

interface CardsWrapperProps {
    population: Array<Gnome>,
    arrayOfActive: Array<number>,
    filtering: boolean,
    gnomeSelected: number,
    setSelected: typeof StatusActions.StatusActions.setSelected,
    setFiltering: typeof StatusActions.StatusActions.setFiltering 
}

const mapStateToProps = (state:RootState) => {
    return {
        population: state.town.population,
        arrayOfActive: state.results.active,
        filtering: state.status.filtering,
        gnomeSelected: state.status.selected
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<CardsWrapperProps, 'setSelected' | 'setFiltering' > => ({
    setSelected: bindActionCreators(StatusActions.StatusActions.setSelected, dispatch),
    setFiltering: bindActionCreators(StatusActions.StatusActions.setFiltering, dispatch)
});

const CardsWrapper = (props:CardsWrapperProps) => {
    const handleClickOnCard = (index:number) => {
        props.setSelected(index);
        if(props.filtering) {
            props.setFiltering(false);
        }
    }

    const backToList = (e:any) => {
        if(e.currentTarget === e.target) {
            props.setSelected(-1);
        }
    }

    return (
        <div className={`${classes.cardsWrapper} ${props.gnomeSelected !== -1 && classes.inPreview}`}>
            <div className={classes.innerWrapper}>
                {props.population.map(
                    gnome => <Card 
                        key={gnome.id} 
                        index={gnome.id}
                        gnomeName={gnome.name}
                        gnomeThumbnail={gnome.thumbnail}
                        selected={props.gnomeSelected}
                        handleClick={handleClickOnCard}
                    />
                )}
            </div>
            { props.gnomeSelected !== -1 &&
                <div 
                    className={classes.cardZoom}
                    onClick={backToList}
                >
                    <CardWithDetails
                        key={props.population[props.gnomeSelected].hair_color}
                        index={props.population[props.gnomeSelected].id}
                        info={props.population[props.gnomeSelected]}
                    />
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CardsWrapper));