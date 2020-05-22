import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  text-align: right;
`;

const StyledIcon = styled.a`
  margin-left: 1rem;
`;

const ContactDetails = (props) => {
  const { contact } = props;

  const renderContactDetail = contact
    ? contact.map((item) => (
        <StyledIcon href={item.URL} key={item.name} target="_blank">
          <img
            width="20px"
            height="20px"
            src={require(`../assets/icons/${item.name}.svg`)}
            alt={`${item.name} icon`}
          />
        </StyledIcon>
      ))
    : null;

  return <StyledContact>{renderContactDetail}</StyledContact>;
};

export default ContactDetails;
