import React, { useState } from 'react';
import Axios from 'axios'

function App(props) {

    const [cep, setCep] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()


    function searchAdress() {
           const intCep = parseInt(cep)
        
        Axios.get(`htpps://viacep.com.br/ws/${intCep}/json/`)
        .then((respose) => {
            setRua(respose.logadouro)
            setBairro(respose.bairro)
            setCidade(respose.localidade)
            setEstado(respose.uf)
        })
    }

    return (
        <div className='container'>
            <div className="form-horizontal">
                <legend >Dados Pessoais</legend>
                
                <div className='form-group'>
                    <label >Nome</label>
                    <input type="text" className='form-control col-6'  />
                </div>

                <div className='form-group'>
                    <label >CPF</label>
                    <input type="number" className='form-control col-3'  />
                </div>

                <hr/>
                <legend >Endereço</legend>

                <div className='form-group'>
                    <label >Cep</label>
                    <input type="number" className='form-control col-3' value={cep} onChange={e => setCep(e.target.value)} onBlur={searchAdress} />
                </div>

                <div className='form-group'>
                    <label >Rua</label>
                    <input type="text" className='form-control col-6' 
                    value={rua} 
                    onChange={e => setRua(e.target.value)}  />
                </div>

                <div className='form-group'>
                    <label >Bairro</label>
                    <input type="text" className='form-control col-4' 
                    value={bairro} 
                    onChange={e => setBairro(e.target.value)}  />
                </div>

                <div className='form-group'>
                    <label >Número</label>
                    <input type="number" className='form-control col-3' />
                </div>

                <div className='form-group'>
                    <label >Cidade</label>
                    <input type="text" className='form-control col-6' 
                    value={cidade} 
                    onChange={e => setCidade(e.target.value)}  />
                </div>

                <div className='form-group'>
                    <label >Estado</label>
                    <input type="text" className='form-control col-6' 
                    value={estado} 
                    onChange={e => setEstado(e.target.value)}  />
                </div>

                <button className='btn btn-success'>
                    Salvar
                </button>
            </div>
        </div>
    )
}

export default App
