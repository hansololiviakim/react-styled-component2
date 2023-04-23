import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSun } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

function Buttons() {
  const size = ['large', 'medium', 'small'];
  const color = ['primary', 'negative'];

  return (
    <>
      <h1>Button</h1>
      {/* primary */}
      <ButtonsSection>
        <Button size={size[0]} color={color[0]} icon={<FontAwesomeIcon icon={faChevronRight} />}>Large Primary Button</Button>
        <Button size={size[1]} color={color[0]}>Medium</Button>
        <Button size={size[2]} color={color[0]}>Small</Button>
      </ButtonsSection>

      {/* negative */}
      <ButtonsSection>
        <Button size={size[0]} color={color[1]} icon={<FontAwesomeIcon icon={faSun} />}>Large Negative Button</Button>
        <Button size={size[1]} color={color[1]}>Medium</Button>
        <Button size={size[2]} color={color[1]}>Small</Button>
      </ButtonsSection>
    </>
  )
}

const ButtonsSection = styled.section`
  margin: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default Buttons