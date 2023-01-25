import React from "react";
import { Button, Form } from "react-bootstrap";

const NewsletterForm = () => {
  const [email, setEmail] = React.useState();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form onSubmit={submit} className="d-flex justify-content-around">
        <Form.Group>
          <Form.Control
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group>
          <Button>Join now!</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default NewsletterForm;
