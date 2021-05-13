import {useState,useEffect} from 'react';
import {API_KEY} from "./components/keys";
import {CONTEXT_KEY} from './components/keys';
import axios from 'axios';
// import { useStateValue } from './StateProvider';
const useGoogleSearch = (term) => {
    const [data,setData]=useState(null);
   //when ever there is a change in term this code gets fired
    useEffect(() => {
            const fetchData = async() => {
                // fetch async method.........................
                // fetch(
                //     `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // )
                // .then(response => response.json())
                // .then(result => {
                //     setData(result) 
                // })


                
                //Axios method.......................
                axios({
                    method:'get',
                    url:`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                })
                .then((response) =>{
                setData(response.data);
                console.log(data);})
            }
            fetchData();//calling the function
    },[term])
    return {data}
};

export default useGoogleSearch;