import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact  description",
  keywords: "manzana platano cereza",
};

const ContactPage = () => {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
};
export default ContactPage;
