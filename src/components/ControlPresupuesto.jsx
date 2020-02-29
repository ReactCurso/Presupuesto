import React, { Fragment } from 'react'
import {revisarPresupuesto} from '../helpers'
import ProptTypes  from 'prop-types'

const ControlPrespuesto = ({presupuesto, restante}) => {
    return (

        <Fragment>

            <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
            <div className={revisarPresupuesto({presupuesto,restante})}>Restante: ${restante}</div>

        </Fragment>


    );
}

ControlPrespuesto.ProptTypes = {
    presupuesto: ProptTypes.number.isRequired,
    restante: ProptTypes.number.isRequired
}

export default ControlPrespuesto;