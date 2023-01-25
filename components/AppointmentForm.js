import React from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const AppointmentForm = () => {
  const [show, setShow] = React.useState(false);
  const [phone, setPhone] = React.useState("");
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
      case "idea":
        setIdea(e.target.value);
        break;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!show) return setShow(true);

    const init = {
      url: "https://acuityscheduling.com/api/v1/appointments",
      auth: {
        username: "28254626",
        password: "559fa94e3fd8d4e0c19e4f17ed63e24c"
      },
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
      // params: {
      //   max: "100",
      //   canceled: "false",
      //   excludeForms: "false",
      //   direction: "DESC",
      // },
    };

    axios("https://acuityscheduling.com/api/v1/appointments", init)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <p>Find out how we can get you started.</p>
      <Form onSubmit={submitForm}>
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
            <Form.Group className="my-3">
              <Form.Control
                type="number"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
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
