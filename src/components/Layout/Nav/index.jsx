import Logo from "../../../BookLink_Logo.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <img src={Logo} />
      <Link to="/books">책방</Link>|<Link to="/bookMeetings">독서모임</Link>|
      <Link to="/myPage">마이페이지</Link>
    </div>
  );
}
export default Nav;
