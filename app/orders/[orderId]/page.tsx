import UtilityBtn from "@/components/UtilityBtn";
import { AiOutlineDownload, AiOutlineShoppingCart } from "react-icons/ai";

const OrderUpdate = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-2 items-center">
          <AiOutlineShoppingCart size={18} color="gray" />
          <span className="font-medium text-lg">Orders</span>
        </div>
        <UtilityBtn name="Export" icon={<AiOutlineDownload color="white" />} />
      </div>
      <div className="bg-basic rounded-lg px-6 py-3 flex flex-col gap-y-4">
        <div>
          <p className="py-2 bg-gray-200 w-full pl-2">Update Invoice</p>
          <div className="flex gap-x-4 w-full mt-3 border p-2">
            <div className="w-full">
              <p className="font-medium mb-1">Invoice No</p>
              <p className="text-sm">556774747466</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Issue Date</p>
              <p className="text-sm">June 6, 2023</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Quantity</p>
              <p className="text-sm">3</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Total Bill</p>
              <p className="text-sm">18,000</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Payment</p>
              <p className="text-sm">10,000</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Due</p>
              <p className="text-sm">8,000</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Discount</p>
              <p className="text-sm">2,000</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">VAT</p>
              <p className="text-sm">2,000</p>
            </div>
            <div className="w-full">
              <p className="font-medium mb-1">Coupon</p>
              <p className="text-sm">PEIEHF</p>
            </div>
          </div>
        </div>
        {/* middel three section  */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex">
              <label className="w-56 bg-orange-200" htmlFor="status">
                *status:{" "}
              </label>
              <select
                className="w-full border border-gray-400 rounded-sm p-1"
                name="status"
                id="status"
              >
                <option value="red">Factory Received</option>
                <option value="red">On the delivery</option>
                <option value="red">Factory Received</option>
              </select>
            </div>
            <div className="flex">
              <label className="w-56 bg-orange-200" htmlFor="status">
                *status:{" "}
              </label>
              <p className="w-full">10%</p>
            </div>

            <div className="flex">
              <label className="w-56 bg-orange-200" htmlFor="status">
                *status:{" "}
              </label>
              <select
                className="w-full border border-gray-400 rounded-sm p-1"
                name="status"
                id="status"
              >
                <option value="red">Factory Received</option>
                <option value="red">On the delivery</option>
                <option value="red">Factory Received</option>
              </select>
            </div>
          </div>
          <div className="bg-blue-300"></div>
          <div className="bg-green-300"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderUpdate;
