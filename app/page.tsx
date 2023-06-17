import AreaChart from "@/components/AreaChart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsChatSquareTextFill, BsFillBoxFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import PieChart from "@/components/PieChart";

export default function Home() {
  const cardData = [
    {
      icon: <BiCategory size={24} />,
      text: "Total Category",
      bgColor: "bg-[#FC8D68]",
      value: 8,
    },
    {
      icon: <AiOutlineShoppingCart size={24} />,
      text: "New Order",
      bgColor: "bg-secondary",
      value: 5,
    },
    {
      icon: <TbTruckDelivery size={24} />,
      text: "Ready to Deliver",
      bgColor: "bg-warning",
      value: 2,
    },
    {
      icon: <BsFillBoxFill size={24} />,
      text: "Available Product",
      bgColor: "bg-[#77CFBB]",
      value: 3,
    },
    {
      icon: <BsChatSquareTextFill size={24} />,
      text: "Appointment",
      bgColor: "bg-[#766EDA]",
      value: 4,
    },
  ];
  return (
    <div className="container">
      {/* cart  */}
      <div className="grid grid-cols-5 gap-x-10">
        {cardData.map((data) => (
          <div
            key={data?.text}
            className={`${data?.bgColor} rounded-lg flex items-center justify-between p-6 text-white`}
          >
            <div>
              <div>{data?.icon}</div>
              <p className="mt-3 font-medium">{data?.text}</p>
            </div>
            <p className="text-3xl font-semibold">{data?.value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="w-full bg-basic p-4 rounded-lg">
          <AreaChart />
        </div>
        <div className="w-full bg-basic p-4 rounded-lg">
          <PieChart />
        </div>
      </div>
    </div>
  );
}
