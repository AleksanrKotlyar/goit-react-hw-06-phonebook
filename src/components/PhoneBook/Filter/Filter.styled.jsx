import styled from 'styled-components';

export const FilterLabelForm = styled('label')`
  display: flex;
  flex-direction: column;
`;

export const FilterInputForm = styled.input`
  background-color: ${p => p.theme.colors.inputColor};
  width: 200px;
  box-shadow: ${p => p.theme.shadows.input};
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.white};
    box-shadow: none;
  }
`;
