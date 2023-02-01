import React from "react";
import { useRouter } from 'next/router'
import Footer from "../../components/Generic/Footer";
import Navbar from "../../components/Generic/Navbar";
import CarData from "../../components/product/CarData";
import TopBar from "../../components/home/TopBar";

function Product() {

  const router = useRouter();
  
  const { product_id } = router.query;

  return (
    <>
      <TopBar />
      <Navbar />
      <CarData />
      <Footer />
    </>
  );
}

export default Product;