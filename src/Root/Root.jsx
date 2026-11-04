import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='mx-auto w-6xl '>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;