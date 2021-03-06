import React from 'react';
import { Appeareance } from '../../info';

import classes from './panelAppeareance.module.scss';

interface AppeareanceProps {
    appeareance: Appeareance
}

const PanelAppeareance = (props:AppeareanceProps) => {
    return (
        <div className={classes.appeareance}>
            <div className={classes.row}>
                <span className={classes.label}>Age:</span>
                <span className={classes.data}>{props.appeareance.age} y/o</span>
            </div>
            <div className={classes.row}>
                <span className={classes.label}>Weight:</span>
                <span className={classes.data}>{props.appeareance.weight.toFixed(2)} kg</span>
            </div>
            <div className={classes.row}>
                <span className={classes.label}>Height:</span>
                <span className={classes.data}>{(props.appeareance.height / 100).toFixed(2)} m</span>
            </div>
            <div className={classes.row}>
                <span className={classes.label}>Hair Color:</span>
                <span className={classes.data}>{props.appeareance.hairColor}</span>
            </div>
        </div>
    )
}

export default React.memo(PanelAppeareance);