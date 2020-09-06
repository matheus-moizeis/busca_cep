import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/register' className="nav-link"> Cadastros </Link>
                        </li>

                        <li className="nav-item active">
                            <Link to='/consult' className="nav-link"> Cadastros </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}