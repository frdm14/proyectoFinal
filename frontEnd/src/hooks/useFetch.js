import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const res = await fetch(url);
        
        if (!res.ok) {
          
          alert("failed to fetch")
        }
        const result = await res.json();
        setData(result.data);
      } catch (error) {
       
      } 
        
      
    };
    fetchData();
  }, [url]);

  return {
    data,
    
  };
};

export default useFetch;