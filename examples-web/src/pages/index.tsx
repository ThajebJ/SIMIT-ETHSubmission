import { Card } from "components/Card";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
<div>
     <h1 className="text-4xl font-medium text-center">Supply Chain Management System</h1>
       <div className="flex flex-wrap justify-center mt-8">
         <Card
           classname="mx-2 my-2"
           title="Manufacturer Page"
           description=""
           url="/supplychain-ui/manufacturing"
         />
         <Card
           classname="mx-2 my-2"
           title="Shippings Page"
           description=""
           url="/supplychain-ui/shipping"
         />
         <Card
           classname="mx-2 my-2"
           title="Products Page"
           description=""
           url="/supplychain-ui/product"
         />
     </div>
   </div>
    </div>
  );
};

export default Home;
