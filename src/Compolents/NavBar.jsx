import React from 'react'

function NavBar(params) {
    return (
        <nav className="navbar" style={{ "background-color": "#e3f2fd" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href='#'>Video Player</a>
                <div className="d-flex pt-3"> {/*Todo: Add User Icon*/}
                    <p>{params.userName}</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;