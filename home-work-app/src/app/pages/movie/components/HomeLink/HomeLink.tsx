import { Link } from "react-router-dom";
import { StyledHomeLink } from "./StyledHomeLink.styled";

export const HomeLink: React.FC = () => (
    <Link to="/home">
        <StyledHomeLink>&#8981;</StyledHomeLink>
    </Link>
);