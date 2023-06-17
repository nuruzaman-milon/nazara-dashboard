import Product from "@/components/Product";
import UtilityBtn from "@/components/UtilityBtn";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2 items-center">
            <AiOutlineShoppingCart size={18} color="gray" />
            <span className="font-medium text-lg">Products</span>
          </div>
          <Link href="products/add-product">
            <UtilityBtn name="Add Product" icon={<BsPlus color="white" />} />
          </Link>
        </div>
        {/* product component  */}
        <Product />
      </div>
    </div>
  );
};

export default Products;
