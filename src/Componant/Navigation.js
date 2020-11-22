import React ,{Fragment}from 'react'

 function Navigation() {
    return (
        
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a href="/" className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a  className="nav-link active">Home <span className="sr-only">(current)</span></a>
      <a  className="nav-link">Features</a>
      <a  className="nav-link">Pricing</a>
    </div>
  </div>
</nav>
        </Fragment>
    )
}

export default Navigation;
