import styled from "@emotion/styled";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import Meta from '../components/Meta';

const Page = styled.div`
	background: #f4f4f4;
	width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Page>
    <Meta />
    <NavBar />
    <SideBar />
    {children}
  </Page>
);

export default Layout