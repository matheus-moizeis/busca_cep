import React from 'react';
import Axios from 'axios'

export default (props) => {

    function list() {
        console.log('entro');
        Axios.get('http://localhost:3001/register')
        .then((response) =>{
            const lista = response.data
            console.log(lista);
        })
    }


    return (
        <div >
            <h1>Consultar</h1>
            <button onClick={list}>Carregar</button>
        </div>
    )
}