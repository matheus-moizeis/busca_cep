import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/busca_cep' className="nav-link"> Buscar Cep </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}