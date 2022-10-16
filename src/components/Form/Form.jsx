import { Component } from 'react';
import { Label, Input, Button } from './Form.styled';
import { Box } from '../Box/Box';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import { Formik } from "formik";
// import * as yup from 'yup';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

    
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
      >
      <Box as = 'form' onSubmit={this.onSubmitForm} display='flex' flexDirection='column' maxWidth={500} mx='auto'>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}   
            onChange={this.handleChange}
            id={this.nameInputId}
            placeholder="Rosie Simpson"
          />
        </Label>
        <Label htmlFor={this.telInputId}>
          Number
          <Input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number} 
            onChange={this.handleChange}
            id={this.telInputId}
             placeholder="+380675557777"
          />
        </Label>
        <Button type="submit">Add contact</Button>
        </Box>
        </Formik>
    );
  }
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


