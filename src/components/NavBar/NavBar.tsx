import Bar from "../atoms/Bar/Bar";
import logo from "../../assets/images/Poke-Rock-Bands.svg"
import SearchInput from "../molecules/SearchInput";

const NavBar = () => {
  return (
    <Bar>
      <img src={logo} alt="Poke Rock Bands" />
      <SearchInput />
    </Bar>
  )
}

export default NavBar;