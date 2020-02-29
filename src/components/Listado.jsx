import React from 'react'
import Gasto from './Gasto'
import ProptTypes  from 'prop-types'

const Listado = ({ gastos }) => (

    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            gastos.map(gasto =>
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            )
        }
    </div>

);

Listado.ProptTypes = {
    gastos: ProptTypes.array.isRequired
}

export default Listado;