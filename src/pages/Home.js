import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar} from "@material-ui/core";
import Search from "../components/Search";
function Home(){
    return(
        <div className="home">
                {/* header */}
                <div className="home__header">
                    <div className="home__header__left">
                        <Link to="/aboute">About</Link>
                        <Link to="/store">Store</Link>
                    </div>
                    <div className="home__header__right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/imgaes">Images</Link>
                    <AppsIcon />
                    <Avatar />
                    </div>
                </div>

                {/* body */}
                <div className="home__body">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google png" />
                    <Search hideButtons = {true} />
                </div>

                {/* footer */}
                <div className="home__footer">

                </div>
        </div>

    )
}

export default Home;