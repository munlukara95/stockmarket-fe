import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from "./page/login/login";
import Register from './page/register/register';

import PageEnum from './type/PageEnum';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentPage: PageEnum.LOGIN
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(page){
    this.setState({...this.state, currentPage: page});
  }

  render(){
    return (
      <div className="to-ui_manager--frame">
        {this.state.currentPage === PageEnum.LOGIN 
          ? <Login setPage={this.setPage}/>
          : <Register setPage={this.setPage}/>}
        
      </div>
    );
  }

  componentDidMount() {
  }
}

export default App;
