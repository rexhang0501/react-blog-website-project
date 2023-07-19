import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(()=>{
        fetch(endpoint)
        .then((res)=>{
            if(!res.ok){
                throw Error("Could not fetch resource");
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setIsLoading(false);
            setErrorMessage(null);
        })
        .catch((err)=>{
            setIsLoading(false);
            setErrorMessage(err.toString());
            console.log(err.toString());
        });
    }, [endpoint]);

    return {
        data,
        isLoading,
        errorMessage,
        setData
    };
};

export default useFetch;