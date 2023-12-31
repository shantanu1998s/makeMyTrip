import './Hotels.css';
import React, { useContext, useEffect, useState } from "react";
import FetchTickets from '../../components/Fetch Tickets/FetchTickets';
import SearchContent from '../../components/Search Content/SearchContent';
import { useParams } from 'react-router';
import { MyContext } from '../../components/Context/Context';
import Loader from '../../components/Loader/Loader';

const Hotels= ()=>{
    const myContext = useContext(MyContext);
    useEffect(()=>{
        myContext.onHomePage(false);
    },[])

    const [hotels, sethotels] = useState([]);
    const [loader, setLoader] = useState(false);
    const [faild, setFaild] = useState(false);
    const getApi = async()=>{
        setLoader(true);
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels');
            const data = await response.json();
            sethotels([...data]);
            setTimeout(() => {
                setLoader(false);
            }, 100);
        }catch(error){
            setFaild(true);
            console.error(error);
        }
    }
    useEffect(()=>{
        getApi();
    },[])

    return(
        <div className="hotels">
            {
                loader? <Loader type={'hotels'} faild={faild} /> :
                <>
                    <SearchContent type={'hotels'} hotels={hotels}/>
                </>
            }
        </div>
    )
}
export default Hotels;