import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './styles.css'

class MenuLeftBar extends Component {

    render() {
        return (
            <div className="vertical-menu">
                {/* <Link className="active" to="/createdevice">Cadastrar dispositivo</Link> */}
                <Link className="active" to="/listdevice">Consultar dispositivo</Link>
            </div>
        );
    }
}

export default MenuLeftBar;
