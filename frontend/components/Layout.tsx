import styled from "@emotion/styled";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Meta from "../components/Meta";

const Page = styled.div`
  background: #edeeef;
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
const MainContent = styled.div`
  width: 100%;
`;
const Layout = ({ children }) => (
  <Page>
    <Meta />
    <SideBar />
    <MainContent>
      <NavBar />
      {children}
    </MainContent>
  </Page>
);

export default Layout;
