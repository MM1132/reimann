import styled from 'styled-components';
import { ReimaButton } from './ReimaButton';

const Div = styled.div`
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`;

export const ReimaNavbar = () => {
  const buttons = ['About', 'Projects', 'Services'];

  return (
    <Div>
      {buttons.map((buttonLabel) => (
        <ReimaButton key={buttonLabel}>{buttonLabel}</ReimaButton>
      ))}
    </Div>
  );
};
