import React, { useState } from 'react';
import styled from 'styled-components';

import Menus from '../_Header';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;

  z-index: 20;
  display: none;

  @media (max-width: 650px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#ffc400' };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Menus open={open} />
    </>
  )
}

export default Burger;