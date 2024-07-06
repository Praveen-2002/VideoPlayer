import React from 'react'

function NavBar(props) {
    return (
        <nav className="navbar" style={{ "backgroundColor": "#e3f2fd" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href='#'>Video Player</a>
                <div className="d-flex pt-3"> {/*Todo: Add User Icon*/}
                    <p>{props.userName}</p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;