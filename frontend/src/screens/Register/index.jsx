import React, { useState } from 'react';
import Axios from 'axios'

function App(props) {

    const [cep, setCep] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [numero, setNumero] = useState()



    function searchAdress() {

        if (cep.length < 8) {

            var newCep = cep.substring() + '0'

            while (newCep.length < 8) {

                newCep = newCep.substring() + '0'
            }

            setCep(newCep)

            const intCep = parseInt(newCep)

            Axios.get(`http://localhost:3001/cep/${intCep}`)
                .then((response) => {
                    const listAddress = response.data

                    setRua(listAddress.street)
                    setBairro(listAddress.neighborhood)
                    setCidade(listAddress.city)
                    setEstado(listAddress.state)


                })
                .catch((error) => {
                    const erro = error.data
                    alert('CEP invalido' + erro);
                })


        } else {
            const intCep = parseInt(cep)

            Axios.get(`http://localhost:3001/cep/${intCep}`)
                .then((response) => {
                    const listAddress = response.data

                    if (listAddress.name === 'CepPromiseError') {
                        alert('Cep Inválido')
                        setCep('')
                        setRua('')
                        setBairro('')
                        setCidade('')
                        setEstado('')
                    } else {
                        setRua(listAddress.street)
                        setBairro(listAddress.neighborhood)
                        setCidade(listAddress.city)
                        setEstado(listAddress.state)
                    }
                })
                .catch(() => {
                    alert('Cep Inválido');
                })
        }
    }

    return (
        <div className='container'>
            <div className="form-horizontal">
                <legend >Endereço</legend>

                <div className='form-group'>
                    <label >Cep</label>
                    <input type="number" className='form-control col-3' value={cep} onChange={e => setCep(e.target.value)} onBlur={searchAdress} />
                </div>

                <div className='form-group'>
                    <label >Rua</label>
                    <input type="text" className='form-control col-6'
                        value={rua}
                        onChange={e => setRua(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label >Bairro</label>
                    <input type="text" className='form-control col-4'
                        value={bairro}
                        onChange={e => setBairro(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label >Número</label>
                    <input type="number" className='form-control col-3'
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label >Cidade</label>
                    <input type="text" className='form-control col-6'
                        value={cidade}
                        onChange={e => setCidade(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label >Estado</label>
                    <input type="text" className='form-control col-6'
                        value={estado}
                        onChange={e => setEstado(e.target.value)} />
                </div>

            </div>
        </div>
    )
}

export default App