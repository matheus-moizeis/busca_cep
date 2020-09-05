import React from 'react';

export default (props) => {
    return (
        <div className="container">

            <form className="form-horizontal">
                <legend >Dados Pessoais</legend>
                <div className="form-group ">
                    <label className="control-label col-sm-2">Nome:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" />
                    </div>
                </div>


                <div className="form-group">
                    <label className="control-label col-sm-2">CPF:</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" />
                    </div>
                </div>

                <legend>Endereço</legend>

                <div className="form-group">
                    <label className="control-label col-sm-2">CEP:</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Rua:</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Número:</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Bairro:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Cidade:</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label col-sm-2">Estado:</label>
                    <div className="col-sm-1">
                        <input type="txt" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

