import React from 'react'; 

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
      alert('Click happened');
    }
    render() {
      return (
        <form className="form">
            <div id="ucestvuj">Želite učestvovati?</div>
            <input
            type='text'
            placeholder='Ime i prezime' 
            />
            <input
            type='text'
            placeholder='E-mail'
            />
            <input
            type='text'
            placeholder='Telefon'
            />
            <input
            type='text'
            placeholder='Vaš hobi'
            />            
            <input
            type='text'
            placeholder='Website (opcionalno)'
            />
            <button type="submit" onClick={this.handleSubmit}>Pošalji prijavu</button>
        </form>
      )
    }
  }
  

export default Form;

