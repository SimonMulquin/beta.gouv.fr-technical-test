import { Footer, Header } from "./styled";

const Layout = ({ children }) => (
  <>
    <Header>
      <h1>Fancy Todo list</h1>
    </Header>
    {children}
    <Footer>
      My application to beta.gouv.fr as a developer for{" "}
      <a target="blank" href="https://metiers.numerique.gouv.fr/">
        the platform "metiers du numériques"
      </a>
    </Footer>
  </>
);

export default Layout;
