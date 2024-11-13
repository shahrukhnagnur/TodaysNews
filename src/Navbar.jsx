import React, { useContext } from 'react'
import { News } from './context'

const Navbar = () => {
    const { setcategory } = useContext(News);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid text-white">
                    <a className="navbar-brand fw-bold text-white" href="#">Todays News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto text-white">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={() => setcategory("general")}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("sports")}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("technology")}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("health")}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("entertainment")}>Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("science")}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#" onClick={() => setcategory("business")}>Business</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
