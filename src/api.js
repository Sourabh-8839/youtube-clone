import axios from 'axios';


const request = axios.create({

    baseURL : "https://youtube.googleapis.com/youtube/v3",
    params : {
          key:"AIzaSyAoVn2w8J3gvuzp8cG4Il445k5egWM-BNA",
    }
})


export default request;