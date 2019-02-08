import styled from "@emotion/styled";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar";
import Meta from "../components/Meta";

const Page = styled.div`
  background: #f4f4f5;
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
const MainContent = styled.div`
  width: 100%;
`;
const Layout = (props) => (
  <Page>
    <Meta />
    <SideBar />
    <MainContent>
      <NavBar />
      {props.children}
    </MainContent>
  </Page>
);

export default Layout;
