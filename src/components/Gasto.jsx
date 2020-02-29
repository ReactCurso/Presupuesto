import React from 'react'
import ProptTypes  from 'prop-types'

const Gasto = ({ gasto }) => (
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">$ {gasto.cantidad} </span>
        </p>
    </li>
)

Gasto.ProptTypes = {
    gasto: ProptTypes.object.isRequired
}

export default Gasto;
