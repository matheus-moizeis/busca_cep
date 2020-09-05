import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/register' className="nav-link"> Cadastros </Link>
                    </li>
  
                    <li className="nav-item active">
                        <Link to='/consult' className="nav-link"> Cadastros </Link>
                    </li>
                </ul>


            </nav>
        </div>
    )
}