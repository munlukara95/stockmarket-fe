import React from 'react';

import PageEnum from '../../type/PageEnum';

class Register extends React.Component {
    constructor(){
        super();
    
        this.state = {
          username: "",
          password: "",
          "re-password": ""
        };
    
        this.On_Change = this.On_Change.bind(this);
        this.On_Click = this.On_Click.bind(this);
    }

    On_Change(e){
        const key = e.target.name;
        const value = e.target.value;
        
        this.setState({[key]: value});
    }

    async On_Click(e){
        const key = e.target.name;
        const _this = this;

        // TODO: register mesajını hazırla ve gönder

        this.props.setPage(PageEnum.LOGIN);
    }

    render(){
        return (
            <div className="to-login__form">
              <div className="to-login__form--brand d-flex justify-content-center">
                <img src="./logodegisim.png"/>
              </div>
              <div className="to-login__form--input_frame">
                <input className="form-control" value={this.state.username} name="username" onChange={this.On_Change} placeholder="Kullanıcı Adı"/>
                <input className="form-control" type="password" value={this.state.password} name="password" onChange={this.On_Change} placeholder="Parola"/>
                <input className="form-control" type="password" value={this.state["re-password"]} name="re-password" onChange={this.On_Change} placeholder="Parola Yinele"/>
              </div>
              <div className="to-login__form--btn">
                <button type="button" name="register" onClick={this.On_Click} className="btn btn-outline-primary">Kayıt Ol</button>
              </div>
            </div>
        );
      }

}

export default Register;