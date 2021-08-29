import styled from "@emotion/styled";
import React from "react";
import ThemeChanger from "../mz-younesify/theme-changer";
import AdSense from 'react-adsense'

const ContainerInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;
  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`
const ExtraUtilsContainer = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
`

export const ThemeContext = React.createContext('light')

// shadowing:
export const Container = (props) => {
  const [theme, setTheme] = React.useState('dark')
  return (
    <>
      <ContainerInner>
        <ExtraUtilsContainer>
          <ThemeChanger setTheme={setTheme} />
        </ExtraUtilsContainer>
        <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
      </ContainerInner>
      <AdSense.Google
        client="ca-pub-1126202017236279"
        slot="3229125651"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
      <footer className="footer-module--footer">
        <p>Made with ❤️ &nbsp; by Mohammed Elzanaty © 2021</p>
      </footer>
    </>
  )
}

export const Main = styled.main`
  height: 100%;
  padding-top: 36px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(75% - 64px);
  padding-right: 64px;
  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;
  }
`;
