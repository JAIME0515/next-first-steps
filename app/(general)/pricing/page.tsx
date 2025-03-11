import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "pricing description",
  keywords: "manzana platano cereza",
};

const PricingPage = () => {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
};
export default PricingPage;
