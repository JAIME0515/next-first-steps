import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About  description",
  keywords: "manzana platano cereza",
};

const AboutPage = () => {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
};

export default AboutPage;
