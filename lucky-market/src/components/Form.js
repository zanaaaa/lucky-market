import React from 'react'; 

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        website: '',
        dataSent:''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      alert('Click happened');
    }
    render() {
      return (
        <form className="form">
            <div id="ucestvuj">Želite učestvovati?</div>
            <input
            type='text'
            placeholder='Ime i prezime'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })} 
            />
            <input
            type='text'
            placeholder='E-mail'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })} 
            />
            <input
            type='text'
            placeholder='Telefon'
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })} 
            />
            <input
            type='text'
            placeholder='Vaš hobi'
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })} 
            />            
            <input
            type='text'
            placeholder='Website (opcionalno)'
            value={this.state.website}
            onChange={e => this.setState({ website: e.target.value })} 
            />
            <button type="submit" onClick={e => this.handleSubmit(e)}>Pošalji prijavu</button>
        </form>
      )
    }
  }
  

export default Form;

