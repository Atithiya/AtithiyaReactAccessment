import React from "react";
import Navbar from "./Navbar";
import ButtonClick from "./ButtonClick";
import axios from "axios";
import { useState, useEffect } from "react";

function HomeAdmin() {
  //1. สร้างตัวแปรมาเก็บค่า member ที่เราไป get มา
  const [members, setMembers] = useState([]);
  const [name, setName] = useState([]);
  const [lastname, setLastname] = useState([]);
  const [position, setPosition] = useState([]);

  //2. Get Data มาก่อน , ตัวแปรresponse เก็บค่ามา
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData(); //เรียกใช้
  }, []);

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );
    if (response.status === 200) {
      setReload(!reload);
    }
    console.log(response);
  };

  const Del = async(id) => {
    const requestData = { 
      id : id,
      name : name,
      lastname : lastname,
      position : position
    }
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,
    requestData
    );
  
    if (response.status===200){
      setReload(!reload)
    }

    console.log(response);
  };

  return (
    <div>
      <Navbar />
      <div className="grid justify-items-center text-6xl mt-20">
        <h2>Generation Thailand</h2>
        <h2>Home-Admin Sector</h2>
        <ButtonClick />

        <div className="mt-9">
          <h3 className="text-3xl bg">Create User Here</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs mt-3"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />

            <input
              type="text"
              placeholder="Lastname"
              className="input input-bordered w-full max-w-xs mt-3"
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
            />

            <input
              type="text"
              placeholder="Position"
              className="input input-bordered w-full max-w-xs mt-3"
              value={position}
              onChange={(ev) => setPosition(ev.target.value)}
            />

            <button
              className="btn glass bg-slate-300 mt-3"
              onClick={() => createData(name, lastname, position)}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table mt-3 ">
            {/* head */}
            <thead>
              <tr className="bg-gray-300 ">
                <th>Members</th>
                <th>Lastname</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {members.map((member) => (
                <tr className="bg-base-200">
                  <th>{member.name}</th>
                  <td>{member.lastname}</td>
                  <td>{member.position}</td>
                  <td>
                    <button className="btn glass bg-slate-300" onClick={() => Del(member.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
