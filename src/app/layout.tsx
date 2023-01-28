'use client';
import { ReimaNavbar, ReimaNavbarButton } from '@/components/reima/ReimaNavbar';
import GlobalStyle from '@/styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';

const mainTheme = {
  colorPrimary: '#fbfbfb',
  fontSizes: {
    medium: {
      min: '1rem',
      preferred: '3vw + 0.5rem',
      max: '3rem',
    },
  },
};

const Body = styled.body`
  background-color: ${(props) => props.theme.colorPrimary};
`;

const MainDiv = styled.div`
  width: clamp(50rem, 30rem + 35vw, 80rem);
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 60rem) {
    width: 100vw;
    padding: 1rem;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const buttons: ReimaNavbarButton[] = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
  ];

  return (
    <html>
      <head />
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Body>
          <ReimaNavbar buttons={buttons} />
          <MainDiv>{children}</MainDiv>
        </Body>
      </ThemeProvider>
    </html>
  );
}
