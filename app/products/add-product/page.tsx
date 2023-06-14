"use client";
import Editor from "@/components/Editor";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

//editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface DivField {
  id: number;
}

const AddProduct: React.FC = () => {
  const [divFields, setDivFields] = useState<DivField[]>([
    { id: Date.now() }, // Display one content by default
  ]);

  const addDivField = () => {
    const newDivField: DivField = {
      id: Date.now(), // Generate a unique ID for each div field
    };
    setDivFields((prevFields) => [...prevFields, newDivField]);
  };

  const removeDivField = (id: number) => {
    setDivFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };

  // const [value, setValue] = useState(""); //for editor
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-3">Add Product</h1>
      <div className="flex flex-col gap-y-5">
        <div className="bg-basic rounded-lg px-6 py-3 flex flex-col gap-y-4">
          <h4 className="font-semibold">Product Information</h4>
          <div>
            <label className="font-medium" htmlFor="name">
              Product Name
            </label>
            <input
              className="block rounded-lg w-96 p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
              id="name"
              type="text"
              placeholder="Input Here"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="category">
              Product Category
            </label>
            <div className="relative w-96">
              <input
                className="block rounded-lg w-full p-2 border border-gray-400 focus:outline-none text-gray-500 mt-1"
                id="category"
                type="text"
                placeholder="Input Here"
              />
              <BiSearchAlt2
                color="gray"
                size={18}
                className="absolute top-[50%] right-2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="bg-basic rounded-lg px-6 py-3 flex flex-col gap-y-4">
          <h1 className="font-semibold">Product Detail</h1>
          <div className="text-gray-500 bg-slate-100 p-3">
            {divFields.map((field, index) => (
              <div key={field.id}>
                <div className="flex items-end gap-4 mb-5">
                  <div>
                    <label className="font-medium mb-2">color</label>
                    <select
                      className="w-full border border-gray-400 rounded-sm p-1"
                      name="color"
                      id="color"
                    >
                      <option value="red">red</option>
                      <option value="red">red</option>
                      <option value="red">red</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium mb-2">Size</label>
                    <select
                      className="w-full border border-gray-400 rounded-sm p-1"
                      name="size"
                      id="size"
                    >
                      <option value="red">XL</option>
                      <option value="red">L</option>
                      <option value="red">M</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium mb-2">*Warehouse</label>
                    <select
                      className="w-full border border-gray-400 rounded-sm p-1"
                      name="warehouse"
                      id="warehouse"
                    >
                      <option value="red">Banani</option>
                      <option value="red">Mirpur</option>
                      <option value="red">Uttara</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium mb-2">*Purchase Price</label>
                    <div className="flex items-center">
                      <div className="border border-gray-400 bg-gray-100 rounded-sm px-2 py-[6px] text-sm">
                        BDT
                      </div>
                      <input
                        className="rounded-sm px-2 py-1 border border-gray-400 focus:outline-none text-gray-500"
                        id="purchase_price"
                        type="text"
                        placeholder="Purchase Price"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium mb-2">*Selling Price</label>
                    <div className="flex items-center">
                      <div className="border border-gray-400 bg-gray-100 rounded-sm px-2 py-[6px] text-sm">
                        BDT
                      </div>
                      <input
                        className="rounded-sm px-2 py-1 border border-gray-400 focus:outline-none text-gray-500"
                        id="selling_price"
                        type="text"
                        placeholder="Selling Price"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-medium mb-2">*Initial Stock</label>
                    <div>
                      <input
                        className="rounded-sm px-2 py-1 border border-gray-400 focus:outline-none text-gray-500"
                        id="Initial_Stock"
                        type="text"
                        placeholder="Stock Amount"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => removeDivField(field.id)}
                    disabled={divFields.length === 1} // Disable "-" button when there is only one content
                    className="w-5 h-5 rounded-full border border-gray-400 flex justify-center items-center mb-2"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={addDivField}
              className="py-1 w-full border border-dashed border-sky-400 text-sky-400"
            >
              + Add Field
            </button>
          </div>
        </div>
        <div className="bg-basic rounded-lg px-6 py-3 flex flex-col gap-y-4">
          <h4 className="font-semibold">Product Description</h4>
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
