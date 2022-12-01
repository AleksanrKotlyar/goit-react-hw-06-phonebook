import styled from 'styled-components';
import { color, space, layout, flexbox, border, shadow } from 'styled-system';

export const Box = styled('div')(color, space, layout, flexbox, border, shadow);

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeigth.bold};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.colorTitle};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SubTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeigth.bold};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.colorTitle};
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Plug = styled.p`
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-top: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
`;
