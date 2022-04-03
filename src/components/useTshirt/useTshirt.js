import { useEffect, useState } from "react"

const useTshirt = () =>{
    const [tShirts, setTshirts] = useState([]);
    useEffect(()=>{
        fetch('tshirt.json')
        .then(res=>res.json())
        .then(data=>setTshirts(data))
    },[])
    return [tShirts, setTshirts]
}
export default useTshirt;