import React from 'react';
import propTypes from 'prop-types';
import { Contacto } from '../model/contacto.class';
import ComponenteB from './componenteB';


function componenteA({ contacto }) {
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h3>Apellido: {contacto.apellido}</h3>
            <h3>Email: {contacto.email}</h3>
            <componenteB estado={true}></componenteB>
        </div>
    );

}

componenteA.propTypes = {
    contacto: propTypes.instanceOf(Contacto),
};

export default componenteA;