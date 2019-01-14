import styled from "@emotion/styled";
import NavBar from "./Navbar/NavBar";
import SideBar from "./sidebar/sidebar";

const Page = styled.div`
	background: #f4f4f4;
	width: 100%;
  min-height: 100vh;
`;

export default ({ children }) => (
  <>
    <Page>
      <NavBar />
      <SideBar />
      {children}
    </Page>
  </>
);
