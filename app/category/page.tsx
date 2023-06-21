"use client";
import {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "@/services/categoryApi";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbEdit } from "react-icons/tb";
import Swal from "sweetalert2";

const Category = () => {
  //show handle delete conformation message
  // const handleDeleteConfirmation = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "Your category has been deleted.", "success");
  //     }
  //   });
  // };

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

  const {
    data: CategoriesData,
    isLoading: CategoriesLoading,
    refetch,
  } = useGetCategoriesQuery();

  // const { data: singleCategoryData, isLoading: singleCategoryLoading } =
  //   useGetCategoryByIdQuery("64730fdcc66a99ef4bc0a71e");
  //   !singleCategoryLoading && console.log("getsingledata", singleCategoryData);
  // console.log(useGetCategoriesQuery());
  // !isLoading && console.log("getdata", data);

  const [createCategory] = useCreateCategoryMutation();

  //handle form for creating new category
  interface IFormData {
    name: string;
    status: string;
  }

  //crate category start
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    status: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Perform any form validation or data processing here
    const data = await createCategory(formData);
    refetch();
    if (data) {
      toast.success("New Category Created", { duration: 3000 });
      // Reset form fields
      setFormData({
        name: "",
        status: "",
      });
    }
  };
  //crate category end

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //handle delete

  const [deleteCategory] = useDeleteCategoryMutation();
  const handleDeleteCategory = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your category has been deleted.", "success");
        const categoryDel = await deleteCategory(id);
        if (categoryDel) {
          refetch(); // Refetch the user list after deleting a user
        }
      }
    });
  };

  const [getCategoryId, setGetCategoryId] = useState("");

  const { data: singleCategoryData, isLoading: singleCategoryLoading } =
    useGetCategoryByIdQuery(getCategoryId);

  // getSingleCategoryData
  const handleEditCategory = (id: string) => {
    setGetCategoryId(id);
  };

  //update category start
  const [updateCategory] = useUpdateCategoryMutation();

  const [formUpdateData, setFormUpdateData] = useState<IFormData>({
    name: singleCategoryData?.data.name,
    status: singleCategoryData?.data.name,
  });

  const handleUpdateSubmit = async (
    event: FormEvent,
    id: string,
    formUpdateData: IFormData
  ) => {
    event.preventDefault();
    const data = await updateCategory({ id, formUpdateData });
    if (data) {
      showSuccessToast();
      refetch();
    }
  };

  const handleUpdateChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormUpdateData({
      ...formUpdateData,
      [event.target.name]: event.target.value,
    });
  };

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
            {/* dynamically showing table row */}
            {CategoriesData?.data?.map((data, index) => (
              <tr key={data?._id}>
                <td>{index + 1}</td>
                <td>{data?.name}</td>
                <td
                  className={`font-medium ${
                    data?.status === "Draft" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {data?.status}
                </td>
                <td>
                  <div className="flex">
                    <label
                      onClick={() => handleEditCategory(data?._id)}
                      className="cursor-pointer"
                      htmlFor="modal-handle"
                    >
                      <TbEdit color="green" size={20} />
                    </label>
                    <button onClick={() => handleDeleteCategory(data?._id)}>
                      <MdDelete color="red" size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* add new category  */}
      <div className="flex-[3]">
        <h1 className="text-lg font-semibold mb-2">Add New Category</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-3 flex flex-col gap-y-3 rounded-xl"
        >
          <div>
            <label className="font-medium" htmlFor="name">
              Category Name:
            </label>
            <input
              className="block w-full p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleUpdateChange}
              required
              placeholder="Enter Category Name"
            />
          </div>
          <div className="mb-2">
            <label className="font-medium" htmlFor="status">
              Status:
            </label>
            <select
              className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none text-gray-500"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleUpdateChange}
              required
            >
              <option value="">Choose Status</option>
              <option value="Publish">Publish</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-secondary py-1 px-4 rounded-md text-white w-full"
          >
            Upload
          </button>
        </form>
      </div>

      {!singleCategoryLoading && (
        <>
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
                  Update Category
                </h1>

                <form
                  onSubmit={() =>
                    handleUpdateSubmit(
                      event,
                      singleCategoryData?.data?._id,
                      formUpdateData
                    )
                  }
                  className="bg-white p-3 flex flex-col gap-y-3 rounded-xl"
                >
                  <div>
                    <label className="font-medium" htmlFor="name">
                      Category Name:
                    </label>
                    <input
                      className="block w-full p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
                      id="name"
                      type="text"
                      name="name"
                      // value={formData.name}
                      onChange={handleChange}
                      required
                      defaultValue={singleCategoryData?.data?.name}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="font-medium" htmlFor="status">
                      Status:
                    </label>
                    <select
                      className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none text-gray-500"
                      name="status"
                      // value={formData.status}
                      onChange={handleChange}
                      id="status"
                      defaultValue={singleCategoryData?.data?.status}
                    >
                      <option disabled>Choose Status</option>
                      <option value="Draft">Draft</option>
                      <option value="Publish">Publish</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary py-1 px-4 rounded-md text-white w-full"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="modal-handle">
              Close
            </label>
          </div>
          {/* modal code end  */}
        </>
      )}
    </div>
  );
};

export default Category;
