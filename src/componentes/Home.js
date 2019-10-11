import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.scss";


const Home = () => {
    return (
      <div className="Home">
          <header>
              <h1>Compre um pastel</h1>
        </header>
        <div className="bnt">
          <Link to="/cadastro"><button >Comprar</button> </Link>
        </div>
      </div>
    )
  }
  export default Home;
