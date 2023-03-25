import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";
import Button from "./Button";

function Header() {
    return (
        <div className="w-100 p-2 flex-col">
            <div className="flex justify-between">
                <HeaderMenu />
                <HeaderTitle />
                <Link to={"/login"}>
                    <Button>Login</Button>
                </Link>
            </div>
            <div>Parte sotto</div>
        </div>
    );
}

export default Header;