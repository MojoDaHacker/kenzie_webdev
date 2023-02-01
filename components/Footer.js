import React from "react";
import { Button, Form } from "react-bootstrap";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <div className="text-center p-3 bg-dark text-light">
      {/* <div>
        <p>Join our newsletter, and get the scoop on new and discounted services.</p>
        <NewsletterForm />
      </div> */}
      <div>
        <a
          style={{ fontSize: 8 }}
          className="text-decoration-underline"
          href="https://storyset.com/people"
        >
          Illustrations by Storyset
        </a>
      </div>
    </div>
  );
};

export default Footer;
