import React from 'react';
import './style.css'

export default (props) => {
    return (
        <div className='container h-100 pt-5'>
            <h1>Cadastrar</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <legend>Dados Pessoais</legend>
                    <div className="form-group">
                        <label >Cpf</label>
                        <input type="number" className="form-control input-form" />
                    </div>

                    <div className="form-group">
                        <label >Nome</label>
                        <input type="text" className="form-control input-form" />
                    </div>

                    <legend>Dados Pessoais</legend>
                    <div className="form-group">
                        <label >CEP</label>
                        <input type="number" className="form-control input-form" />
                    </div>

                    <div className="form-group">
                        <label >Rua</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label >Número</label>
                        <input type="number" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label >Bairro</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label >Cidade</label>
                        <input type="text" className="form-control" />
                    </div>


                    <div className="form-group">
                        <label >Estado</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <button className="btn btn-primary btn-round">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
