import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const navigate = useNavigate();

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(
      firstNameInputRef.current.value,
      lastNameInputRef.current.value,
      emailInputRef.current.value,
      messageInputRef.current.value
    );

    toast.success(
      `Hallo ${firstNameInputRef.current.value} ! Your message has been sent successfully!`
    );
    setTimeout(() => navigate('/'), 3000);
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    emailInputRef.current.value = '';
    messageInputRef.current.value = '';
  };
  return (
    <div className="flex justify-center items-center flex-col xl:flex-row w-[100%]  lg:border m-auto lg:m-[1rem] rounded shadow-black shadow-xs ">
      <div className="flex flex-col justify-center items-center border lg:border-0 w-[100%]  p-[1rem] mb-[1rem] md:p-[3rem] lg:h-[900px] ">
        <p className="m-[.25rem] md:m-[1rem] font-bold text-center ">
          CONTACT US
        </p>

        <form
          onSubmit={sendMessage}
          className=" flex flex-col justify-center items-center w-[100%]"
        >
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            First Name :{' '}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="text"
              name="firstName"
              ref={firstNameInputRef}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Last Name :{' '}
            <input
              type="text"
              name="lastName"
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              ref={lastNameInputRef}
            />
          </label>
          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Email :{' '}
            <input
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
              type="email"
              name="email"
              ref={emailInputRef}
            />
          </label>

          <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] md:m-[1rem] ">
            Your message :{' '}
            <textarea
              className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[150px] "
              type="textarea"
              name="textarea"
              rows={10}
              cols={10}
              placeholder="Start typing..."
              ref={messageInputRef}
            />
          </label>

          <button className="bg-orange-500 justify-center items-center w-[100px] md:w-[400px]  my-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
            SEND MESSAGE
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}
