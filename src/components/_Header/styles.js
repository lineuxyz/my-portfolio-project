import styled from 'styled-components';
import { shade } from 'polished';
import {MdBrightness7, MdBrightness1, MdCode} from 'react-icons/md'

export const Container = styled.header`
  width: 100%;
  height: 60px;

  padding: 0 30px;

  background-color: #353535;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.img`
  width: 180px;
  height: auto;
`;

export const Menus = styled.div`
  margin-right: 32px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  z-index: 1;

  a {
    cursor: pointer;

    &:hover {
    color: ${shade(0.2, '#FFFFFF')}
  }
  }

  > a {
    margin-left: 15px;
  }
`;

