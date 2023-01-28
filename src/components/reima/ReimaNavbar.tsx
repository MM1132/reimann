import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { ReimaButton } from './ReimaButton.styled';

const Div = styled.nav`
  background-color: ${(props) => props.theme.colorPrimary};
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.25);

  & > * {
    flex-basis: 10rem;
  }

  @media (max-width: 35rem) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 0.5rem;
    & > * {
      width: auto;
      flex-basis: auto;
    }
  }
`;

export interface ReimaNavbarButton {
  label: string;
  href: string;
}

export interface ReimaNavbarProps {
  buttons: ReimaNavbarButton[];
}

export const ReimaNavbar = ({ buttons }: ReimaNavbarProps) => {
  const router = useRouter();

  return (
    <Div>
      {buttons.map((button) => (
        <ReimaButton
          key={button.label}
          onClick={() => {
            router.push(button.href);
          }}
        >
          {button.label}
        </ReimaButton>
      ))}
    </Div>
  );
};
