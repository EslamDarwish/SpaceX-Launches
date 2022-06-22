import axios from "axios"; 
const apiClient= axios.create({
  baseURL: "https://api.spacexdata.com/v4/",
  headers: {
    "Content-type": "application/json"
  }
});


export default apiClient;