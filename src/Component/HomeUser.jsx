import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ButtonClick from "./ButtonClick";
import axios from "axios";

function HomeUser() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData(); //เรียกใช้
  });

  return (
    <div>
      <Navbar />
      <div className="grid justify-items-center text-6xl mt-20 ">
        <h2 > Generation Thailand </h2>
        <h2>Home-User Sector</h2>
        <ButtonClick />
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table mt-3 ">
            {/* head */}
            <thead>
              <tr className="bg-gray-300 ">
                <th>Members</th>
                <th>Lastname</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {members.map((member) => (
                <tr className="bg-base-200">
                  <th>{member.name}</th>
                  <td>{member.lastname}</td>
                  <td>{member.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
