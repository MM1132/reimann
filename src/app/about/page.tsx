'use client';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(2rem, 1rem + 5vw, 5rem);
  align-items: center;
`;

const ProfilePictureContainer = styled.div`
  width: 20rem;
  height: 20rem;
  background-image: url('/img/robertreimann.jpg');
  background-size: 20rem 20rem;
  border-radius: 50%;
  border: 5px solid #929292;
`;

const Name = styled.h2`
  font-size: 4rem;
`;

const NameContainer = styled.div``;

export default function AboutPage() {
  return (
    <Main>
      <ProfilePictureContainer />
      <NameContainer>
        <Name>ROBERT</Name>
        <Name>REIMANN</Name>
      </NameContainer>
    </Main>
  );
}
