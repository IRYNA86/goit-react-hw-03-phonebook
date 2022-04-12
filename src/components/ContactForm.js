import React from "react";
import { Formik, Form, Field } from 'formik';
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled(Field)`
font-size: 15px;
margin-left: 5px;`;
const Text = styled.label`
font-size: 15px;
margin-bottom: 15px`;
const Button = styled.button`
width: 120px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: #fffff;
  color: orange;
  border-radius: 10%;
  padding: 5px;
  `;
const FormStyle = styled(Form)`
display: flex;
  flex-direction: column;
`

class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = event => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    };

    handleSubmit = ({resetForm}) => {
        // event.preventDefault();
        this.props.onAddContact({ ...this.state });
        this.setState({ name: '', number: '' });
        resetForm()
    };

    render() {
        
        return (
            <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
            <FormStyle>
                <Text>
                        Name
                        <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </Text>
                <Text>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </Text>
                <Button type='submit'>Add contact</Button>
                </FormStyle>
            </Formik>)
    }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactForm