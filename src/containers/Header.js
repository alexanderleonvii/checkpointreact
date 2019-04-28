import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import View from './View'

const Header = (props) => {
  let {list, clickHandler
  // para recibir las otras funciones y el task
  } = props
  console.log('Header props', props)
  return(
    <div>
      <div className="header">
        <Link to="/home">
          <img src="../assets/logo.png" className="logo-img" />
          <span className="logo-name">Unicornios</span>
        </Link>
        
        <div className="menu">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      {/* <Link to="/view/1">View</Link>
      <Link to="/view/2">View</Link> */}
      
      <Route
        exact path='/'
        render={(props) => <Home {...props} 
        list={list} clickHandler={clickHandler} 
        />}
      />
      <Route
        path='/home'
        render={(props) => <Home {...props} 
        list={list} clickHandler={clickHandler} 
        />}
      />
      <Route path="/about" component={About}/>
      {/* <Route path="/view/:id" component={View}/> */}
      <Route 
          //path={`/view/${item.id}`}
          path="/view/:id"
          render={(props) => 
            <View {...props} 
              list={list} clickHandler={clickHandler
              // aqui van las funciones creadas y el task
              } 
            />}
        />
      
    </div>
  )
}

export default Header