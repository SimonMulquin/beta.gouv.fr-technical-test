const Layout = ({ children }) => (
  <>
    <header>
      <h1>Fancy Todo list</h1>
    </header>
    {children}
    <footer>
        My application to beta.gouv.fr as a developer for <a target="blank"  href="https://metiers.numerique.gouv.fr/">the platform "metiers du numériques"</a>
    </footer>
  </>
);

export default Layout;
