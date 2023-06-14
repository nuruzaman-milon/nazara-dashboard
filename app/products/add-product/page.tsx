import { BiSearchAlt2 } from "react-icons/bi";

const AddProduct = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold mb-3">Add Product</h1>
      <form>
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
      </form>
    </div>
  );
};

export default AddProduct;
