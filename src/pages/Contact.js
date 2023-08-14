import React, { useState } from "react";

function Contact() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setButtonClicked(true);
    
  };

  return (
    <>
      <div className="m-5">
        <h2 className="m-2">Contact Us</h2>
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="formName" className="m-2">
                Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="formName"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formEmail" className="m-2">
                Email
              </label>
              <input
                required
                type="email"
                className="form-control"
                id="formEmail"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="formMessage" className="m-2">
                Message
              </label>
              <textarea
                required
                className="form-control"
                id="formMessage"
                rows={4}
                placeholder="Enter your message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          {buttonClicked && (
            <p className="mt-3 text-success">Form has been submitted!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
