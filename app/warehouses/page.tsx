"use client";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";

const Warehouses = () => {
  //show handle delete conformation message
  const handleDeleteConfirmation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Warehouse has been deleted.", "success");
      }
    });
  };

  //show success toast
  const showSuccessToast = () => {
    toast.success("Warehouse updated!", {
      duration: 3000, // Duration for which the toast is shown (in milliseconds)
    });
  };
  //show create success toast
  const showCreateSuccessToast = () => {
    toast.success("Warehouse Created!", {
      duration: 3000, // Duration for which the toast is shown (in milliseconds)
    });
  };

  return (
    <div className="flex gap-10 container">
      {/* show all category  */}
      <div className="flex-[6] overflow-x-auto">
        <h1 className="text-lg font-semibold mb-2">All Warehouses</h1>
        <table className="table bg-basic">
          {/* head */}
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Warehouse Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Mirpur-10</td>
              <td className="text-red-600 font-medium">Draft</td>
              <td>
                <div className="flex">
                  <label className="cursor-pointer" htmlFor="modal-handle">
                    <TbEdit color="green" size={20} />
                  </label>
                  <button onClick={() => handleDeleteConfirmation()}>
                    <MdDelete color="red" size={20} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Uttara</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <div className="flex">
                  <label className="cursor-pointer" htmlFor="modal-handle">
                    <TbEdit color="green" size={20} />
                  </label>
                  <button onClick={() => handleDeleteConfirmation()}>
                    <MdDelete color="red" size={20} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mirpur-10</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <div className="flex">
                  <label className="cursor-pointer" htmlFor="modal-handle">
                    <TbEdit color="green" size={20} />
                  </label>
                  <button onClick={() => handleDeleteConfirmation()}>
                    <MdDelete color="red" size={20} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mirpur-10</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <div className="flex">
                  <label className="cursor-pointer" htmlFor="modal-handle">
                    <TbEdit color="green" size={20} />
                  </label>
                  <button onClick={() => handleDeleteConfirmation()}>
                    <MdDelete color="red" size={20} />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Dhanmondi</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <div className="flex">
                  <label className="cursor-pointer" htmlFor="modal-handle">
                    <TbEdit color="green" size={20} />
                  </label>
                  <button onClick={() => handleDeleteConfirmation()}>
                    <MdDelete color="red" size={20} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* add new category  */}
      <div className="flex-[3]">
        <h1 className="text-lg font-semibold mb-2">Add New Warehouse</h1>
        <div className="bg-white p-3 flex flex-col gap-y-3 rounded-xl">
          <div>
            <label className="font-medium" htmlFor="name">
              Warehouse Name:
            </label>
            <input
              className="block w-full p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
              id="name"
              type="text"
              placeholder="Input Here"
            />
          </div>
          <div className="mb-2">
            <label className="font-medium" htmlFor="status">
              Status:
            </label>
            <select
              className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none text-gray-500"
              name="status"
              id="status"
            >
              <option selected disabled>
                Choose Status
              </option>
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
            </select>
          </div>
          <button
            onClick={() => showCreateSuccessToast()}
            className="bg-secondary py-1 px-4 rounded-md text-white w-full"
          >
            Upload
          </button>
        </div>
      </div>

      {/* modal code start  */}
      <input type="checkbox" id="modal-handle" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            className="absolute top-3 right-3 text-xl font-semibold cursor-pointer"
            htmlFor="modal-handle"
          >
            <RxCross2 />
          </label>
          <div className="flex-[3]">
            <h1 className="text-lg font-semibold mb-2 ml-3">
              Update Warehouse
            </h1>
            <div className="bg-white p-3 flex flex-col gap-y-3 rounded-xl">
              <div>
                <label className="font-medium" htmlFor="name">
                  Warehouse Name:
                </label>
                <input
                  className="block w-full p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
                  id="name"
                  type="text"
                  placeholder="Input Here"
                />
              </div>
              <div className="mb-2">
                <label className="font-medium" htmlFor="status">
                  Status:
                </label>
                <select
                  className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none text-gray-500"
                  name="status"
                  id="status"
                >
                  <option selected disabled>
                    Choose Status
                  </option>
                  <option value="Draft">Draft</option>
                  <option value="Publish">Publish</option>
                </select>
              </div>
              <button
                onClick={() => showSuccessToast()}
                className="bg-secondary py-1 px-4 rounded-md text-white w-full"
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal-handle">
          Close
        </label>
      </div>
      {/* modal code end  */}
    </div>
  );
};

export default Warehouses;
