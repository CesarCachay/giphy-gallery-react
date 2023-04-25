import { SwitchWithTheme } from "@/components/molecules";
import { NavbarProps } from "./types";
import { NavbarContainer, StyledLink } from "./Navbar";

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  return (
    <NavbarContainer
      container
      justify='space-between'
      alignItems='center'
    >
      <StyledLink to='/'>
        Shine Solar React Challenge
      </StyledLink>
      <SwitchWithTheme toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </NavbarContainer>
  );
};

export default Navbar;