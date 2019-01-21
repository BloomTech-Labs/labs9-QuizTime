import {
  Box as B,
  Text as T,
  Flex as F,
  Button as Butt
} from "@rebass/emotion";

/*
export const Text = system{
    is: "p",
    fontSize: "14px",
    fontFamily: "sans",
    fontWeight: "300"
*/
/* NAVIGATION COMPONENTS*/
export const NavBarHolder = props => (
  <F justifyContent="flex-end" alignItems="center" bg="red.1" {...props} />
); 

export const SideBarHolder = props => (
  <F width="100px" bg="blue.2" flexDirection="column" css={{minHeight:"100vh"}} {...props} />
);

/* CONTAINERS */

export const Container = props => (
  <B mx="auto" css={{ maxWidth: "800px" }} {...props} />
);

export const FullScreenContainer = props => (
  <F justifyContent="center" alignItems="center" flexDirection="column" width="100vw" css={{height:"100vh"}} {...props} />
)

/* TYPOGRAPHY */
export const Text = props => <T fontSize={2} fontFamily="sans" {...props} />;

export const BoldText = props => (
  <T fontSize={1} fontFamily="sans" fontWeight={6} {...props} />
);

export const UpperCase = props => (
  <T
    fontSize={1}
    fontFamily="sans"
    fontWeight={1}
    css={{ textTransform: "uppercase" }}
    {...props}
  />
);

export const Button = props => <Butt variant="primary" {...props} />;

export const Avatar = props => (
  <F justifyContent="center" alignItems="center" width="30px" bg="blue.2" m={3} color="white" fontFamily="sans" css={{height:"30px", borderRadius:"50%"}} {...props} />
)
