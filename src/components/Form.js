import React from 'react'; 
import emailjs from 'emailjs-com';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
        buttonText: "Pošalji prijavu",
      };
      } 
      sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "contact_form",
            "template_tgm2vo3",
            e.target,
            "user_HI1enShe8TsEkAhzcV3u7"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        this.resetForm();
      };
      resetForm() {
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
          buttonText: "Poslano!",
        });
      }
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
     
    render() {
      const { name, email, phone, message, website,  buttonText } = this.state;
      return (
        <form onSubmit={this.sendEmail.bind(this)} className="form">
            <div id="ucestvuj">Želite učestvovati?</div>
            <input
              type="text"
              value={name}
              placeholder="Ime i prezime"
              name="name"
              autoComplete="off"
              id="name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              autoComplete="off"
              name="email"
              id="email"
              onChange={this.handleChange}
            />
            <input
              type="text"
              value={phone}
              placeholder="Broj telefona"
              autoComplete="off"
              name="phone"
              id="phone"
              onChange={this.handleChange}
            />
            <input
              type='text'
              placeholder='Vaš hobi'
              value={message}
              autoComplete="off"
              name="message"
              id="message"
              onChange={this.handleChange}
            /> 
            <input
              type='text'
              placeholder='Website / link na vaš rad (opcionalno)'
              value={website}
              name="website"
              autoComplete="off"
              id="website"
              onChange={this.handleChange}
            />             
            <input type="submit" value={buttonText}></input>
        </form>
      )
    }
  }
  

export default Form;

