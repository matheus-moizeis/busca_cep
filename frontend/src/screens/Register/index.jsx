import React, { useState } from 'react';
import Axios from 'axios'

function App(props) {

    const [cep, setCep] = useState()
    const [rua, setRua] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [numero, setNumero] = useState()

    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()


    function searchAdress() {

        const intCep = parseInt(cep)

        Axios.get(`http://localhost:3001/cep/${intCep}`)
            .then((response) => {
                const listAddress = response.data

                setRua(listAddress.street)
                setBairro(listAddress.neighborhood)
                setCidade(listAddress.city)
                setEstado(listAddress.state)


            })
            .catch((error) => {
                console.log(error);
            })
    }


    function addAdress(e) {
        e.preventDefault()
        const informations ={
            nome: nome,
            cpf: cpf,
            cep: cep,
            rua: rua,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            estado: estado
        }
        Axios.post('http://localhost:3001/register', informations)
        .then(response =>{
            alert('Cadastrado com sucesso');
        }).catch(erro =>{
            alert('Erro ao cadastrar');
        })
    }

    return (
        <div className='container'>
            <div className="form-horizontal">
                <legend >Dados Pessoais</legend>

                <div className='form-group'>
                    <label >Nome</label>
                    <input type="text" value={nome} className='form-control col-6'
                        onChange={e => setNome(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label >CPF</label>
                    <input type="number" className='form-control col-3'
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>

                <hr />
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

                <button className='btn btn-success' onClick={addAdress}>
                    Salvar
                </button>
            </div>
        </div>
    )
}

export default App