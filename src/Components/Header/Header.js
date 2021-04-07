import React, { useContext } from 'react';
import { Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import MenuAppBar from '../MenuAppBar/MenuAppBar';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <MenuAppBar></MenuAppBar>
        </div>
    );
};

export default Header;