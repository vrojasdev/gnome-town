import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, Gnome, StatusActions } from '../../../redux';
import Card from './Cards/CardPreview/CardPreview';
import CardWithDetails from './Cards/CardWithDetails/CardWithDetails';

import classes from './cardsWrapper.module.scss';

export interface CardsWrapperProps {
    population: Array<Gnome>,
    arrayOfActive: Array<number>,
    panelVisible: boolean,
    gnomeSelected: number,
    setSelected: typeof StatusActions.StatusActions.setSelected,
    setPanelVisible: typeof StatusActions.StatusActions.setPanelVisible 
}

const mapStateToProps = (state:RootState) => {
    return {
        population: state.town.population,
        arrayOfActive: state.results.active,
        panelVisible: state.status.panelVisible,
        gnomeSelected: state.status.selected,
    }
}

const mapDispatchToProps = (dispatch:Dispatch): Pick<CardsWrapperProps, 'setSelected' | 'setPanelVisible' > => ({
    setSelected: bindActionCreators(StatusActions.StatusActions.setSelected, dispatch),
    setPanelVisible: bindActionCreators(StatusActions.StatusActions.setPanelVisible, dispatch)
});

const CardsWrapper = (props:CardsWrapperProps) => {
    const [listOfGnomes, setListOfGnomes] = useState([]);

    useEffect(() => {
        generateList();
    }, [props.arrayOfActive]);

    // function that modifies the population displayed depending on the results in case that filters are applied
    const generateList = () => {
        const list:any = props.arrayOfActive.map(
            index => <Card
                key={index}
                index={props.population[index].id}
                gnomeName= {props.population[index].name}
                gnomeThumbnail={props.population[index].thumbnail}
                selected={props.gnomeSelected}
                handleClick={handleClickOnCard}
            />
        );
        setListOfGnomes(list);
    }

    // function that passes the index of the card that has been clicked by the user
    const handleClickOnCard = (index:number) => {
        props.setSelected(index);
        if(props.panelVisible) {
            props.setPanelVisible(false);
        }
    }

    // function that returns the user to the list of all population
    const backToList = (e:any) => {
        if(e.currentTarget === e.target) {
            props.setSelected(-1);
        }
    }

    return (
        <div className={`${classes.cardsWrapper} ${props.gnomeSelected !== -1 && classes.inPreview}`}>
            <div className={classes.innerWrapper}>
                {listOfGnomes}
            </div>
            { props.gnomeSelected !== -1 &&
                <div 
                    className={classes.cardZoom}
                    onClick={backToList}
                >
                    <CardWithDetails
                        index={props.population[props.gnomeSelected].id}
                        info={props.population[props.gnomeSelected]}
                    />
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CardsWrapper));