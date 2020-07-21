import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState, Gnome, StatusActions, FilterOptions } from '../../../redux';
import Card from './Card/Card';
import CardWithDetails from './Card/CardWithDetails';

import classes from './cardsWrapper.module.scss';

interface CardsWrapperProps {
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

    const generateList = () => {
        let list:any = [];

        /*if(props.arrayOfActive.length === 0) {
            list = props.population.map(
                gnome => <Card 
                            key={gnome.id} 
                            index={gnome.id}
                            gnomeName={gnome.name}
                            gnomeThumbnail={gnome.thumbnail}
                            selected={props.gnomeSelected}
                            handleClick={handleClickOnCard}
                        />
                );
        }
        else {*/
            list = props.arrayOfActive.map(
                index => <Card
                    key={index}
                    index={props.population[index].id}
                    gnomeName= {props.population[index].name}
                    gnomeThumbnail={props.population[index].thumbnail}
                    selected={props.gnomeSelected}
                    handleClick={handleClickOnCard}
                />
            );
        //}

        setListOfGnomes(list);
    }

    const handleClickOnCard = (index:number) => {
        props.setSelected(index);
        if(props.panelVisible) {
            props.setPanelVisible(false);
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
                {/* {props.population.map(
                    gnome => <Card 
                        key={gnome.id} 
                        index={gnome.id}
                        gnomeName={gnome.name}
                        gnomeThumbnail={gnome.thumbnail}
                        selected={props.gnomeSelected}
                        handleClick={handleClickOnCard}
                    />
                )} */}
                {listOfGnomes}
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