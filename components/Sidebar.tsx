"use client";
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePathname } from "next/navigation";
import {
  BsFillBoxFill,
  BsChatLeftText,
  BsChatRightText,
  BsFillFileEarmarkSpreadsheetFill,
} from "react-icons/bs";
import { MdDiscount, MdOutlineDashboardCustomize } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Link from "next/link";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const datas = [
    {
      _id: "100",
      title: "Dashboard",
      link: "/",
      icon: <RxDashboard />,
    },
    {
      _id: "101",
      title: "Customer",
      link: "/customers",
      icon: <FaUserAlt />,
    },
    {
      _id: "102",
      title: "Analytics",
      link: "/analytics",
      icon: <SiGoogleanalytics />,
    },
    {
      _id: "103",
      title: "Orders",
      link: "/orders",
      icon: <AiOutlineShoppingCart />,
    },
    {
      _id: "104",
      title: "Products",
      link: "/products",
      icon: <BsFillBoxFill />,
    },
    {
      _id: "105",
      title: "Transactions",
      link: "/transactions",
      icon: <BsFillFileEarmarkSpreadsheetFill />,
    },
    {
      _id: "106",
      title: "Promotions",
      link: "/promotions",
      icon: <TbSpeakerphone />,
    },
    {
      _id: "107",
      title: "Discounts",
      link: "/discounts",
      icon: <MdDiscount size={20} />,
    },
    {
      _id: "108",
      title: "Message",
      link: "/message",
      icon: <BsChatLeftText />,
    },
    {
      _id: "109",
      title: "Appointment",
      link: "/appointment",
      icon: <BsChatRightText />,
    },
    {
      _id: "110",
      title: "Customization",
      link: "/customization",
      icon: <MdOutlineDashboardCustomize />,
    },
  ];

  const path = usePathname();
  // const fix = path.startsWith(path);
  // console.log(fix);

  const [click, setClick] = useState(path);

  useEffect(() => {
    setClick(path);
  }, [path]);

  const isActiveLink = (link: string) => {
    if (link === "/") {
      return path === "/";
    }
    return path.startsWith(link);
  };

  return (
    <div className="flex-1 h-[93.5vh] sticky top-0">
      <div className="pl-6 pt-6 flex flex-col gap-2">
        {datas.map((data) => (
          <Link
            key={data?._id}
            href={data?.link}
            className={`flex gap-4 items-center pl-3 py-2 rounded-lg ${
              isActiveLink(data?.link) ? "bg-secondary text-basic" : "bg-basic"
            }`}
          >
            {data?.icon}
            {data?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
