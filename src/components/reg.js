import { useState } from "react";

function Reg() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInput = (event) => {
    setInputValue({ ...inputValue, firstName: event.target.value });
  };

  const handleLastNameInput = (event) => {
    setInputValue({ ...inputValue, lastName: event.target.value });
  };

  const handleEmailInput = (event) => {
    setInputValue({ ...inputValue, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="m-auto w-[80%] h-[100vh]">
        <div className="flex flex-col justify-center items-center h-[100vh]">
          {submitted ? (
            <div className="success-message">
              Success! Thank you for your registering
            </div>
          ) : null}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[350px] w-full shadow-2xl p-5 bg-white gap-6"
          >
            <input
              className="w-full bg-slate-100 p-3"
              type="text"
              value={inputValue.firstName}
              placeholder="PLease enter your firstname"
              onChange={handleFirstNameInput}
              name="firstname"
            />
            <input
              className="w-full bg-slate-100 p-3"
              type="text"
              value={inputValue.lastName}
              placeholder="PLease enter your lastname"
              onChange={handleLastNameInput}
              name="lastname"
            />

            <input
              className="w-full bg-slate-100 p-3"
              type="email"
              value={inputValue.email}
              placeholder="PLease enter your email"
              onChange={handleEmailInput}
              name="email"
            />
            <button className="bg-[#7BB655] px-auto w-full py-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reg;
