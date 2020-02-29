import React, { Fragment, useState } from 'react';
import Error from './Error'
import ProptTypes  from 'prop-types'


const Pregunta = ({setPresupuesto, setRestante, setConsultarPresupuesto}) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)


    const definirPresupuesto = (e) => setCantidad(parseInt(e.target.value, 10));

    const agregarPresupuesto = e => {
        e.preventDefault();
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return;
        }
        setError(false)

        setPresupuesto(cantidad)
        setRestante(cantidad)
        setConsultarPresupuesto(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="presupuesto incorrecto" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary  u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.ProptTypes = {
    setPresupuesto: ProptTypes.func.isRequired,
    setRestante: ProptTypes.func.isRequired,
    setConsultarPresupuesto: ProptTypes.func.isRequired
}
export default Pregunta;