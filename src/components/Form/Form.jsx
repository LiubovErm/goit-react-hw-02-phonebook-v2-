import { Component } from 'react';
import { Label, Input, Button, ErrorText } from './Form.styled';
import { Box } from '../Box/Box';
import { nanoid } from 'nanoid'
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';


const schema = yup.object().shape({
  name: yup.string().matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ).required('Треба ввести імя'),
  number: yup.string().min(7).matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ).required('Треба ввести номер'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

   handleSubmit = (values, {resetForm}) => {
    this.props.onSubmit({ ...values });
    resetForm();
  };

  render() {
    return (
    <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit} 
      >
      <Box display='flex' flexDirection='column' maxWidth={500} mx='auto'>
        <Form autoComplete='off'>
          <Label htmlFor={this.nameInputId}>
          Name
            <Input
            type="text"
            name="name"
            required
            id={this.nameInputId}
            placeholder="Rosie Simpson"
              />
              <FormError name="name"/>
          </Label>
          <Label htmlFor={this.telInputId}>
          Number
            <Input 
            type="tel"
            name="number"
            required
            id={this.telInputId}
            placeholder="+380675557777"
              />
            <FormError name="number"/>
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Box>
    </Formik>
    );
  }
}



