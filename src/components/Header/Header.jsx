import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/Logo.png'


export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark header">
            <NavLink className="navbar-brand" to="/"><img  src={logo}/></NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse header_right" id="collapsibleNavId">

                <form className="d-flex my-2 my-lg-0">
                    <NavLink className="nav-link " to="/carts" aria-current="page">
                        <i class="fa fa-search-plus" style={{ color: 'white' , fontSize: '25px', marginTop:'8px'}}></i>
                    </NavLink>
                    <button className="btn btn-outline-success my-2 my-sm-0 search_header" type="submit">Search</button>
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link " to="/carts" aria-current="page">
                                <i class="fa fa-cart-plus"></i> (1)
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/login" aria-current="page">Login </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/register" aria-current="page">Register </NavLink>
                        </li>
                    </ul>
                </form>
            </div>
        </nav>


    )
}