"use client";
import PrimaryButton from "@/components/PrimaryButton";
import {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} from "@/services/categoryApi";
import React from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";

const Category = () => {
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
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
      }
    });
  };

  //show success toast
  const showSuccessToast = () => {
    toast.success("Category updated!", {
      duration: 3000, // Duration for which the toast is shown (in milliseconds)
    });
  };

  //show create success toast
  const showCreateSuccessToast = () => {
    toast.success("Promotion Created!", {
      duration: 3000, // Duration for which the toast is shown (in milliseconds)
    });
  };

  const { data: allCategoriesData, isLoading: allCategoriesLoading } =
    useGetCategoriesQuery();
  const { data: singleCategoryData, isLoading: singleCategoryLoading } =
    useGetCategoryByIdQuery("64730fdcc66a99ef4bc0a71e");
  // console.log(useGetCategoriesQuery());
  // !isLoading && console.log("getdata", data);
  !singleCategoryLoading && console.log("getsingledata", singleCategoryData);

  return (
    <div className="flex gap-10 container">
      {/* show all category  */}
      <div className="flex-[6] overflow-x-auto">
        <h1 className="text-lg font-semibold mb-2">All Categories</h1>
        <table className="table bg-basic">
          {/* head */}
          <thead className="">
            <tr>
              <th>SL</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>Lehenga</td>
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
              <td>Lehenga</td>
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
              <td>Lehenga</td>
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
              <td>Lehenga</td>
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
              <td>Lehenga</td>
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
        <h1 className="text-lg font-semibold mb-2">Add New Category</h1>
        <div className="bg-white p-3 flex flex-col gap-y-3 rounded-xl">
          <div>
            <label className="font-medium" htmlFor="name">
              Category Name:
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
              defaultValue={"Choose Status"}
            >
              <option disabled>Choose Status</option>
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
            <h1 className="text-lg font-semibold mb-2 ml-3">Update Category</h1>
            <div className="bg-white p-3 flex flex-col gap-y-3 rounded-xl">
              <div>
                <label className="font-medium" htmlFor="name">
                  Category Name:
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
                  defaultValue={"Choose Status"}
                >
                  <option disabled>Choose Status</option>
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

export default Category;
