import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ReadTask = () => {
  const [formdata, setFormdata] = useState([]);

  const navigate = useNavigate();

  const showData = async () => {
    const res = await axios.get(API_URL);
    //console.log(res.data);
    setFormdata(res.data);
  };

  const handleDelete = async (_id) => {
    //console.log(_id);
    const confirm = window.confirm("Are you sure want to Delete?");
    if (confirm) {
      const res = await axios.delete(API_URL + _id);
      console.log(res.data);
      toast.success("Task Deleted Successfully");
      showData();
    }
  };

  const handleEdit = ({ _id, title, message }) => {
    localStorage.setItem("ID", _id);
    localStorage.setItem("title", title);
    localStorage.setItem("message", message);
    navigate("/edit");
  };

  useEffect(() => {
    showData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
      {formdata.map((item) => {
        return (
          <div
            className="max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={item._id}
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.message}
            </p>
            <div className="flex items-center justify-evenly">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleDelete(item._id)}
              >
                Delete
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
              </button>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleEdit(item)}
              >
                Edit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadTask;
