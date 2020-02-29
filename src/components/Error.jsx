import React from 'react'
import ProptTypes  from 'prop-types'
const Error = ({ mensaje }) => (
    <p className="alert alert-danger error">{mensaje}</p>
);
Error.ProptTypes = {
    mensaje: ProptTypes.string.isRequired
}
export default Error;