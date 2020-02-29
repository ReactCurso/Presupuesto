import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
import ProptTypes  from 'prop-types'
const Formulario = ({ saveGasto,setCrearGasto }) => {

    const [gasto, setGasto] = useState({
        nombre: "",
        cantidad: 0
    })

    const [error, setError] = useState(false)

    const handleChange = e => {
        setGasto({
            ...gasto,
            [e.target.name]: !isNaN(e.target.value) && e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        })
    }


    const { nombre, cantidad } = gasto

    const addGasto = e => {

        e.preventDefault()

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true)
            return;
        }

        setError(false)

        gasto.id = shortid.generate();

        saveGasto(gasto)
        setGasto({ nombre: '', cantidad: 0 })
        setCrearGasto(true)

    }


    return (
        <form onSubmit={addGasto}>
            <h2>Indicar Gastos</h2>
            {error ? <Error mensaje="Campos invalidos" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    name="cantidad"
                    value={cantidad}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="add gasto"
            />
        </form>

    );
}


Formulario.ProptTypes = {
    saveGasto: ProptTypes.func.isRequired,
    setCrearGasto: ProptTypes.func.isRequired
}


export default Formulario;