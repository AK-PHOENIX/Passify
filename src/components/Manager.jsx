import { React, useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const pref = useRef();

  const [form, setform] = useState({ site: "", userName: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    // alert("show the password");
    if (ref.current.src.includes("Images/eyeclosed.svg")) {
      ref.current.src = "Images/eyes.svg";
      pref.current.type = "text";
    } else {
      ref.current.src = "Images/eyeclosed.svg";
      pref.current.type = "password";
    }
    // if (pref.current.type.includes("text")) {
    //   pref.current.type = "password";
    // } else {
    //   pref.current.type = "text";
    // }
  };
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const savePassword = () => {
    setpasswordArray([...passwordArray,{...form, id:uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form, id:uuidv4()}]));
    console.log([...passwordArray, form]);
    setform({site:"",userName:"",password:""})
    toast("Password Saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
   

  };
  const deletePassword = (id) => {
    console.log( "deleting your pass with id "+ id)
    let c = confirm("Delete Password???");
    if(c){
      setpasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
      // console.log([...passwordArray, form]);
    }
    toast("Password Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };
  const editPassword = (id) => {
    console.log( "editing your pass with id "+ id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray,{...form, id:uuidv4()}]));
    // console.log([...passwordArray, form]);

  };

  const copyText = (text) => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#90EE90,transparent)]"></div>
        {/* C9EBFF */}
      </div>
      <div className="md:containers">
      <div className="container mx-auto max-w-4xl ">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">ify/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          Your own Password Manager{" "}
        </p>
        <div className="text-white flex flex-col p-4 gap-5">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full text-black border  border-green-600 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-1/1 gap-8">
            <input
              value={form.userName}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full text-black border  border-green-600 w-full p-4 py-1"
              type="text"
              name="userName"
              id=""
            />
            <div className="relative ">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full text-black border  border-green-600 w-60 p-4 py-1"
                ref={pref}
                type="password"
                name="password"
                id=""
              />
              <span
                className="absolute right-2 top-[7px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="Images/eyeclosed.svg"
                  alt=""
                  width={"20px"}
                />
              </span>
            </div>
          </div>
          <div className="relative flex flex-nowrap justify-end">
            <button
              onClick={savePassword}
              className="text-black flex justify-end items-center bg-green-500 hover:bg-green-400 rounded-full px-4  py-1 w-fit gap-2 border-2 border-green-700 "
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                //   gjjvytyq
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-3xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && (
            <div className="text-center text-4xl">!No Passwords Saved</div>
          )}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center  py-2 ">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="w-7 cursor-pointer justify-end"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "4px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center">
                          <span>{item.userName}</span>
                          <div
                            className="w-7 cursor-pointer justify-end"
                            onClick={() => {
                              copyText(item.userName);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "4px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center">
                          <span type="password">{item.password}</span>
                          <div
                            className="w-7 cursor-pointer justify-end"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "4px",
                                paddingLeft: "4px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="cursor-pointer mx-1" onClick={()=>{editPassword(item.id)}}>
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "4px",
                                paddingLeft: "4px",
                              }}
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                            ></lord-icon>
                          </span>

                          <span className="cursor-pointer mx-1"  onClick={()=>{deletePassword(item.id)}}>
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "4px",
                                paddingLeft: "4px",
                              }}
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Manager;
