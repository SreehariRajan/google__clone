import React, { useContext, useState } from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {StateContext} from "../StateProvider";
//import {StateContext, useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";
function Search(props){
    const [{},dispatch] =useContext(StateContext);
    //const [{},dispatch] =useStateValue();
    const [input , setInput] =useState("");
    const history =useHistory();
    const search = e =>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history.push("/search");
 
    }
    
    return(
        <form className="search">
             <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input  value={input} onChange={e => setInput(e.target.value)}/>
                <span className="mic"><MicIcon/></span>
             </div>  
            {props.hideButtons == true ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} searchvariant="outlined">Google search</Button>
                    <Button variant="outlined">Iam Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} searchvariant="outlined">Google search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">Iam Feeling Lucky</Button>
                 </div> 
            )
            }
            
        </form>

    )
}

export default Search;