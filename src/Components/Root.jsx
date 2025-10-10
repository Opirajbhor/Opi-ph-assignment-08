import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import LoadingState from './LoadingState';

const Root = () => {


  const navigation =  useNavigation()
  if(navigation.state === "loading") return <LoadingState></LoadingState>
    return (
        <div>
            <Navbar className="h-[70px] w-full bg-white "></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;