import React from "react";
import axios from "axios";
import EnvelopeIcon from "@heroicons/react/24/solid/EnvelopeIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import { Button, Form } from "react-bootstrap";

const AppointmentForm = ({ description }) => {
  const [show, setShow] = React.useState(false);
  const [showPhoneOrEmail, setPhoneOrEmail] = React.useState(false); // if true show phone, if false show email
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("asasdads@gmail.com");
  const [name, setName] = React.useState("");
  const [idea, setIdea] = React.useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "idea":
        setIdea(e.target.value);
        break;
    }
  };
  const handleChangePhoneOrEmail = () => setPhoneOrEmail(!showPhoneOrEmail);

  const submitForm = (e) => {
    e.preventDefault();

    if (!show) return setShow(true);
    var contactRequest = show ? "phone" : "email";

    axios
      .post("/api/createConsultation", {
        data: {
          [contactRequest]: show ? phone : email,
          name,
          idea,
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <p>
        {description ? description : "Find out how we can get you started."}
      </p>
      <Form onSubmit={submitForm} style={{ maxWidth: 640 }} className="mx-auto">
        {show ? (
          <>
            <Form.Group className="my-3">
              <Form.Control
                className="place-center"
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="my-3 d-flex">
              {showPhoneOrEmail ? (
                <Form.Control
                  className="w-75"
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              ) : (
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              )}
              <Button className="ms-5" type="button" onClick={handleChangePhoneOrEmail}>
                <div>
                  {showPhoneOrEmail ? (
                    <EnvelopeIcon style={{ width: "1rem" }} />
                  ) : (
                    <PhoneIcon style={{ width: "1rem" }} />
                  )}
                </div>
              </Button>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Control
                type="text"
                as="textarea"
                name="idea"
                rows={3}
                value={idea}
                onChange={handleChange}
                placeholder="What ideas do you have in mind?"
              />
            </Form.Group>
          </>
        ) : null}
        <Form.Group>
          <Button type="submit">{show ? "Submit" : "Let's Talk"}</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default AppointmentForm;
