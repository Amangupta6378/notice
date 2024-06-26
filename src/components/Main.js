import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { toast } from "react-toastify";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  const chartConfig = {
    type: "pie",
    width: 380,
    height: 280,
    series: [
      users.filter((user) => user.role === "Student" && user.batch === "uniques 1.0").length,
      users.filter((user) => user.role === "Student" && user.batch === "uniques 2.0").length,
      users.filter((user) => user.role === "Student" && user.batch === "uniques 3.0").length,
      users.filter((user) => user.role === "Student" && user.batch === "super 60").length,
    ],
    labels: ["Uniques 1.0", "Uniques 2.0", "Uniques 3.0", "Super 60"],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5"],
      legend: {
        show: false,
        labels: {
          colors: "#000", // Color of legend text
          useSeriesColors: true, // Set to true if you want legend colors to match series colors
        },
      },
    },
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5036/api/v1/getusers");
        setUsers(response.data.users || []);
      } catch (error) {
        if (error.response) {
          console.error("Server Error:", error.response.data);
          toast.error("Server Error: " + error.response.data.message);
        } else if (error.request) {
          console.error("Network Error:", error.request);
          toast.error("Network Error: Please check your internet connection");
        } else {
          console.error("Error:", error.message);
          toast.error("Error: " + error.message);
        }
      }
    };
    getUsers();
  }, []);

  return (
    <div className="p-3">
      <div className="flex flex-wrap gap-3 ms-5 items-center">
        <div>
          <h1 className="text-2xl font-semibold py-2 ms-2 text-gray-900">
            Manage Student
          </h1>
          <table className="divide-y w-[50%] divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Batch
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users && users.length > 0 && users
                .filter((user) => user.role === "Student")
                .map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.batch}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        // onClick={() => deleteUser(user._id)}
                        className="ml-2 text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-[450px] mt-11 bg-white">
          <div>
            <h1 className="text-2xl font-semibold py-2 ms-7 text-gray-900">
              Batch Distribution
            </h1>
            <div className="flex justify-center flex-wrap gap-[10px]">
              <p className="text-[#020617]">
                {" "}
                <span className="w-[20px] inline-block h-[10px] bg-[#020617]"></span>{" "}
                Uniques 1.0
              </p>
              <p className="text-[#ff8f00]">
                {" "}
                <span className="w-[20px] inline-block h-[10px] bg-[#ff8f00]"></span>{" "}
                Uniques 2.0
              </p>
              <p className="text-[#00897b]">
                {" "}
                <span className="w-[20px] inline-block h-[10px] bg-[#00897b]"></span>{" "}
                Uniques 3.0
              </p>
              <p className="text-[#1e88e5]">
                {" "}
                <span className="w-[20px] inline-block h-[10px] bg-[#1e88e5]"></span>{" "}
                Super 60
              </p>
            </div>
          </div>
          <Card>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            ></CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
              <Chart {...chartConfig} />
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-[50px]">
        <h1 className="text-2xl font-semibold py-2 ms-2 text-gray-900">
          Manage Admin
        </h1>
        <table className="divide-y min-w-full divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users && users.length > 0 && users
              .filter((user) => user.role === "Admin")
              .map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      // onClick={() => deleteUser(user._id)}
                      className="ml-2 text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
