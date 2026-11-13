import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
           
                <main>
                    <Outlet></Outlet>
                </main>
            
        </div>
    );
};

export default Root;