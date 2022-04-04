import React, { Component } from 'react'
import logo from "../images/logo.png"
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import { CARS_ROUTE } from 'common/routes';

export default class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="Car rent logo" />
                        </Link>
                    </div>
                    <nav className="header__menu">
                        <button type="button" className='header__btn' onClick={this.handleToggle}>
                            <FaAlignRight className='header__icon'/>
                        </button>
                        <ul className={classNames({"header__links-show": this.state.isOpen}, "header__links")}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={CARS_ROUTE}>Cars</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
