import axios from "axios";

async function getData() {
    let res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
    console.log( res.data)

    let res2 =await axios.get("https://api.thecatapi.com/v1/images/search?limit=2")
    console.log(res2.data)
}


getData(); 