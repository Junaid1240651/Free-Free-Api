import React, { useEffect, useRef, useState } from 'react';

const EndpointLink = () => {
    const endpointRef = useRef();
    const [endpointVal, setEndpointVal] = useState(null);
    const [trueEndpoint, setTrueEndpoint] = useState(false);
    useEffect(() => {
        const value = localStorage.getItem('endpoint');
        value ? setEndpointVal(value) : setEndpointVal('');
    }, [])
    const submitHandler = (event) => {
        event.preventDefault();
        fetch('https://backendrg-tnw0.onrender.com/' + endpointRef.current.value)
            .then(res => {
                if (res.ok) {
                    setTrueEndpoint(true);
                } else {
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <React.Fragment>
            <div className="text-center">
                <h2 className="text-3xl md:my-14 my-7">Endpoint Information</h2>
                <form onSubmit={submitHandler}>
                    <label htmlFor="endpoint" className="md:text-2xl text-[10px] md:border-4 border-black md:rounded-l-full rounded-md md:p-[10px] border-2 p-[2px] text-neutral-700">https://backendrg-tnw0.onrender.com/</label>
                    <input id="endpoint" type="text" className="md:text-2xl text-[10px] md:border-t-4 md:border-b-4 md:border-r-4 border-gray md:p-2 border-2 p-[2px]" placeholder="Enter an endpoint Identifier" ref={endpointRef} value={endpointVal} />
                    <button type="submit" className="bg-sky-500 md:text-2xl md:p-[7px] md:m-14 rounded-lg text-white border-2 p-[2px]">Load Dashboard</button>
                </form>
            </div>
            {trueEndpoint ?
                <div>
                    Endpoint Details
                </div>
                :
                <h2 className="text-3xl md:my-14 my-7 text-center">Enter an endpoint identifier to get status and usage information</h2>
            }
        </React.Fragment>
    )
}

export default EndpointLink;