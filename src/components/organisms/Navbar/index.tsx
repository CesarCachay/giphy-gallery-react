import { useLocation } from "react-router-dom";
import { FlexContainer } from "@/components/atoms";
import { SwitchWithTheme } from "@/components/molecules";
import { NavbarContainer, StyledLink, StyledTitle } from "./Navbar";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <NavbarContainer
      container
      direction='column'
      justify='space-between'
      alignItems='center'
    >
      <StyledTitle>Giphy Gallery</StyledTitle>
      <FlexContainer width="100%" justify='space-between' alignItems='center' margin="10px 0 0 0">
        <StyledLink to={pathname === '/' ? '/favorites' : '/'}>
          {pathname === '/' ? 'Go to Favorites' : 'Go back'}
        </StyledLink>
        <SwitchWithTheme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </FlexContainer>
    </NavbarContainer>
  );
};

export default Navbar;