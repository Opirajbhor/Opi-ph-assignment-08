import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Appsdetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    console.log(id)
    console.log(data)
    return (
        <div>
            Apps Details Page
        </div>
    );
};

export default Appsdetails;