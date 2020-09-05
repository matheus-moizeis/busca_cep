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
                    <div className="col-xs12 col-sm-3 col-md-2">
                        <button className='btn btn-primary'>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg>
                        </button>
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

