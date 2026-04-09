import React from "react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
export default function AboutPage() {
   return (
      <Container>
         ```
         <Heading title="About Us" description="Learn more about our company and mission." />
         <p className="text-lg text-gray-700">
            We are a leading app store dedicated to providing the best applications for our users. Our mission is to connect developers with users and create a thriving ecosystem of innovative apps. We believe in fostering creativity and supporting developers in their journey to create amazing applications.</p>
         <p className="text-lg text-gray-700 mt-4">
            Our team is passionate about technology and committed to delivering a seamless experience for both developers and users. We strive to maintain a high standard of quality and security in the apps we offer, ensuring that our users have access to reliable and trustworthy applications.</p>
      </Container>
   );
}