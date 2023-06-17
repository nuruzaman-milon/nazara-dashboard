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
        <div className="overflow-x-auto">
          <table className="table bg-basic">
            {/* head */}
            <thead className="">
              <tr>
                <th>Image</th>
                <th>Tittle</th>
                <th>Category</th>
                <th>Product Code</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/images/container.png"
                    alt="nazara main logo"
                    width={248}
                    height={248}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td>DP-GP/0073</td>
                <td>Anakoli</td>
                <td>123252</td>
                <td>5000</td>
                <td>2</td>
                <td>
                  <div>
                    <button className="text-[#5B94FC]">Image</button>
                    <span className="text-[#3b7ffd]"> | </span>
                    <button className="text-[#5B94FC]">Edit</button>
                  </div>
                  <button className="text-[#5B94FC]">Quick View</button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <CustomerViewProfileDrawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      toggleDrawer={toggleDrawer}
    /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
