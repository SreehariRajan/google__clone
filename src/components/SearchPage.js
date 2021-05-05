import React, { useContext } from "react";
import { StateContext} from "../StateProvider";
//import { StateContext, useStateValue } from "../StateProvider";
import './SearchPage.css';
import useGoogleSearch from '../useGoogleSearch';
import Response from "../response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SearchPage(){
    const [ { term='tesla'} , dispatch] = useContext(StateContext);
    //const [ { term='tesla'} , dispatch] = useStateValue();
    //live api call
    const { data } = useGoogleSearch(term);
        //mock api call
    // const data = Response;
    return (
        <div className="searchPage">
            <div className="searchpage__header">
                <Link to ="/">
                <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google png" />
                </Link>
                <div className="searchPage__headerBody">
                <Search hideButtons={false}/>

                <div className="searchPage__options">
                    <div className="options__left">
                        <div className="searchPage__option">
                            <SearchIcon className="icons"/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className="searchPage__option">
                            <DescriptionIcon className="icons"/>
                            <Link to="/news">News</Link>
                        </div>
                        <div className="searchPage__option">
                            <ImageIcon className="icons"/>
                            <Link to="/images">Images</Link>
                        </div>
                        <div className="searchPage__option">
                            <LocalOfferIcon className="icons"/>
                            <Link to="/shopping">Shopping</Link>
                        </div>
                        <div className="searchPage__option">
                            <RoomIcon className="icons"/>
                            <Link to="/maps">Maps</Link>
                        </div>
                        <div className="searchPage__option">
                            <MoreVertIcon className="icons"/>
                            <Link to="/more">More</Link>
                        </div>
                            
                    </div>
                    <div className="options__right">
                        <div className="searchPage__option">
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className="searchPage__option">
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                    

                </div>
            </div>
            </div>
           {/* conditional-rendering */}
            {term && (
            <div className="search__results">
                <p className="searchPage__resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds ) for {term}
                </p>

                {data?.items.map(item =>(
                    <div className="searchPage__result">
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                            )}
                        {item.displayLink}
                        </a>
                        <a className="searchPage__resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage__resultSnippet">{item.snippet}</p>
                    </div>

                ))}

            </div>
            )}
        </div>
    )
}

export default SearchPage;

//////////
