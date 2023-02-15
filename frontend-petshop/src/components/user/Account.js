import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { TiTick } from "react-icons/ti";

import { StoreContext } from "../../context/StoreContext";

//file to binary
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function Account() {
  const { homepageState, signupDispatch, homepageDispatch} =
    useContext(StoreContext);
  const navigate = useNavigate();
  const { user } = homepageState;

  const profileHandler = (e) => {
        user &&
      ( e.target.textContent === "Profile" ?
         navigate("/profile") : e.target.textContent === "Orders" ?navigate("/orders") : navigate('/account')
        
        )
  };

//delete handler
const deleteHandler = (id) => {
  fetch(`http://localhost:8000/users/${id}`, {
    method: "DELETE",
    headers: { token: localStorage.getItem("token") }      
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.success) {
        toast.success('Account has Deleted');
        setTimeout(() => {
          localStorage.removeItem('token');
          homepageDispatch({ type: 'setUser', payload: { data: '' } })
          navigate('/')
        },2000)
        
      }
    })
}

  const updateUserHandler = async (e) => {
    e.preventDefault();
    
    let formData = new FormData(e.target);
    let data = new FormData();

    //if the profile image want to be updated
    
    let profileImage = formData.get('profileImage').size > 0  ? await toBase64(formData.get('profileImage')) : (user.profileImage);
    
       
    data.append('firstName', e.target.firstName.value);
    data.append('address', e.target.address.value);
    data.append('lastName', e.target.lastName.value);
    data.append('email', user.email);
    //password not want to update then old password has been taken
    data.append('password', e.target.password.value || user.password);
    data.append('profileImage', profileImage);

    signupDispatch({ type: "clearForm" });
    

    fetch(`http://localhost:8000/users/${user._id}`, {
      method: "PATCH",
      headers: { token: localStorage.getItem("token") },
      body: data
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          homepageDispatch({ type: "setUser", payload: { data: result.data } });
          
          let name = result.data.firstName.concat(" ", result.data.lastName);
          toast.success(`Hallo ${name} !  profile updated`);
          setTimeout(() => navigate("/profile"), 1000);
        } else {
          if (Array.isArray(result.message)) {
            const errMessage = result.message.reduce(
              (overallError, errItem) => (overallError += ` * ${errItem}  \n `)," ");           
            toast.error(`${errMessage}`);
          } else {
            toast.error(result.message);
            
          }
        }
      });
  };
  return (
    <div >
    
     
      <div className="flex  flex-col justify-center items-center  md:flex-row w-[100%]  lg:border mx-auto my-[4rem] md:m-0  rounded shadow-black shadow-lg">
        <div className="flex flex-col w-[40%]  p-2 md:p-1">
          <img
            src={user.profileImage}
            alt="profile"
            className="m-auto rounded-[50%] w-[300px] md:visible"
          />
          <div className="flex justify-center items-center flex-col md:flex-row">
            <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Profile
            </button>
             <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px] m-3 md:mx-[1rem] md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Orders
            </button> 
            <button
              onClick={profileHandler}
              className="bg-gradient-to-r from-orange-500 to-yellow-600 text-xs hover:bg-gradient-to-l justify-center items-center w-[150px] md:w-[200px]  m-3 md:mx-auto md:my-[1rem] md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col w-[100%] md:w-[60%] lg:border   bg-gradient-to-r from-orange-500 to-yellow-600 text hover:bg-gradient-to-l">
          <div className="flex flex-col justify-center items-center border lg:border-0 w-[100%]  p-[1rem] mb-[1rem] md:p-1 lg:h-[900px] ">
            <p className="m-[.25rem]  font-bold text-center text-shadow">
              {" "}
              ACCOUNT
            </p>

            <form
              className=" flex flex-col justify-center items-center w-[100%]"
              onSubmit={updateUserHandler}
            >
              <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem] ">
                First Name :{" "}
                <input
                  className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
                  type="text"
                  name="firstName"
                  defaultValue={user.firstName}
                  
                />
              </label>
              <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem]  ">
                Last Name :{" "}
                <input
                  type="text"
                  name="lastName"
                  defaultValue={user.lastName}
                  className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
                  
                />
              </label>              
              
              <label className="flex flex-col justify-center item-center text-xs md:text-md  md:items-start m-[.25rem]  ">
                Password:{" "}
                <input
                  className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
                  type="password"
                  name="password"
                  placeholder="****"
                />
              </label>
              <div className="flex  flex-wrap md:flex-nowrap  align-start pl-2 md:pl-0  ">
                <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
                  <sup>
                    {" "}
                    <TiTick />{" "}
                  </sup>{" "}
                  Mind. 8 Characters
                </div>
                <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
                  {" "}
                  <sup>
                    {" "}
                    <TiTick />{" "}
                  </sup>{" "}
                  AaBbCc
                </div>
                <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
                  <sup>
                    {" "}
                    <TiTick />{" "}
                  </sup>{" "}
                  0-9
                </div>{" "}
                <div className="flex flex-row mr-1 font-thin  text-[12px] md:text-xs ">
                  {" "}
                  <sup>
                    {" "}
                    <TiTick />{" "}
                  </sup>
                  !@#$%
                </div>
              </div>
              <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem]  ">
                Address :{" "}
                <input
                  type="text"
                  name="address"
                  defaultValue={user.address}
                  className="border border-slate-200 rounded w-[150px] md:w-[400px] h-[50px] "
                  
                />
              </label>   
              
              <label className="flex flex-col justify-center item-center text-xs md:text-md md:items-start m-[.25rem]  ">
                Profile Image:{" "}
               
                <input
                  className=" py-2 border border-slate-200 rounded bg-white w-[150px] md:w-[400px] h-[50px] "
                  type="file"
                  name="profileImage"                  
                />
                 <img src={user.profileImage} width="50px" alt="profileImage" />
                
              </label>
              <button className="bg-orange-500 justify-center items-center w-[100px] md:w-[200px]  my-3 md:mx-auto  md:p-1 rounded shadow-black shadow-md focus:bg-green-600  h-[30px] lg:box-content">
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
