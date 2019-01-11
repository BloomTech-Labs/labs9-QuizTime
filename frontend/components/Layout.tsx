import styled from "@emotion/styled";
import NavBar from "./Navbar/NavBar";
import SideBar from "./sidebar/sidebar";

const Page = styled.div`
	background: #f4f4f4;
	width: 100%;
	height: 700px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
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
