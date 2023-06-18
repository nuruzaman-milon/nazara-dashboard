import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const Category = () => {
  return (
    <div className="flex gap-10 container">
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
                <button>
                  <TbEdit color="green" size={20} />
                </button>
                <button>
                  <MdDelete color="red" size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lehenga</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <button>
                  <TbEdit color="green" size={20} />
                </button>
                <button>
                  <MdDelete color="red" size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lehenga</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <button>
                  <TbEdit color="green" size={20} />
                </button>
                <button>
                  <MdDelete color="red" size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lehenga</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <button>
                  <TbEdit color="green" size={20} />
                </button>
                <button>
                  <MdDelete color="red" size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Lehenga</td>
              <td className="text-green-600 font-medium">Publish</td>
              <td>
                <button>
                  <TbEdit color="green" size={20} />
                </button>
                <button>
                  <MdDelete color="red" size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
              className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none"
              name="status"
              id="status"
            >
              <option disabled>Choose Status </option>
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
            </select>
          </div>
          <PrimaryButton name="Upload" />
        </div>
      </div>
    </div>
  );
};

export default Category;
