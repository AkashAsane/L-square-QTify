
import axios from 'axios';

export const BACKEND="https://qtify-backend-labs.crio.do"

export const fetchTopalbums= async()=>{
    try {
        const response=await axios.get(`${BACKEND}/albums/top`)
        return response.data;
    } catch (e) {
        console.error(e)
    }
}

export const fetchNewalbums= async()=>{
    try {
        const response=await axios.get(`${BACKEND}/albums/new`)
        return response.data;
    } catch (e) {
        console.error(e)
    }
}

export const fetchSongs= async()=>{
    try {
        const response=await axios.get(`${BACKEND}/songs`)
        return response.data;
        
    } catch (e) {
        console.error(e)
    }
}


export const FetchFilters = async () => {
    try {
        const response=await axios.get(`${BACKEND}/genres`);
        return response.data;
       
    } catch (e) {
        console.error(e);
    }
}


