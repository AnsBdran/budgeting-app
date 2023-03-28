import React from "react";
import {Outlet, useLoaderData} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {fetchData} from "../utils/helpers.js";

const MainLayout = () => {
    const {userName} = useLoaderData();
  return (
    <>
      <Header userName={userName}/>
      <main className="p-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;


// loader

export function mainLoader()  {
    const userName = fetchData("userName");
    return {userName}
}