import React from "react"
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 15px;
  background-color: #fffff;
  color: orange;
  border-radius: 10%;
  padding: 5px;
  margin-left: 5px;
  `;
const Li = styled.li`
list-style-type: none;
margin-bottom: 5px;
`

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map((contact) => (
      <Li key={contact.id}>
        {contact.name + ":" + contact.number}
            {
                <Button
                    type="button"
                    name="delete"
                    onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </Button>
        }
      </Li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
  })),
}
export default ContactList;