import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios"

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    console.log("Submitting the form")
    let submission = {
      "Name": name,
      "Email": email,
      "Message": message
    }
    console.log(submission)
    axios
      .post(
        process.env.REACT_APP_BASE + "message/",
        submission
      )
      //need to save response.data to a variable
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName("");
    setEmail("");
    setMessage("");

  }

  return (
    <>
      <div className="contact-desktop">
        <div className="contact">
          <div className="superheader">Let's talk cake!</div>
          <div className="descriptor">
            <p>
              Want to reach out about something super-custom? (We do those, by the
              way) Or maybe you're a business looking to set up a recuring bulk
              order. Reach out to us here and we'll get back to you as soon as we
              get these cookies in the oven. (Don't worry, we set a timer)
            </p>
          </div>
          <div className="form">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
              </div>
              <Button type="submit" variant="primary" className="custom-buttons form-submit-button">
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>



      <div className="contact-mobile">
        <div className="form">
          <form id="contact-form-mobile" onSubmit={handleSubmit}>
            <div className="form-group">
              <h1>Let's talk cake!</h1>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="1"
                onChange={(e) => setMessage(e.target.value)}
              >
              </textarea>
            </div>
            <Button type="submit" variant="primary" className="custom-buttons form-submit-button">
              SEND
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
