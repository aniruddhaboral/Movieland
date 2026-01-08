import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"; 

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
          // "f25138a589msh43dc74b9b28d8a1p1ec3fejsn6849844e899d",
          //  "eb3671a8edmshd4a6b2ddaac12c2p131060jsn5c867096fce2",
              "bac0108b31mshc07d951f602d92bp1a7077jsn62475b7c43ca",
          // https://rapidapi.com/Glavier/api/youtube138/playground/apiendpoint_4c5ad961-4fc2-4066-bd68-6ea5bb94408c  
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com", 
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

