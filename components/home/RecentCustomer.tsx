import React from "react";

const RecentCustomer = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-basic">
        {/* head */}
        <thead className="">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anarkoli Dress</td>
            <td>01393933939</td>
            <td className="flex gap-2">
              <button className="text-blue-500">View Profile</button>
            </td>
          </tr>
          <tr>
            <td>Anarkoli Dress</td>
            <td>01393933939</td>
            <td className="flex gap-2">
              <button className="text-blue-500">View Profile</button>
            </td>
          </tr>
          <tr>
            <td>Anarkoli Dress</td>
            <td>01393933939</td>
            <td className="flex gap-2">
              <button className="text-blue-500">View Profile</button>
            </td>
          </tr>
          <tr>
            <td>Anarkoli Dress</td>
            <td>01393933939</td>
            <td className="flex gap-2">
              <button className="text-blue-500">View Profile</button>
            </td>
          </tr>
          <tr>
            <td>Anarkoli Dress</td>
            <td>01393933939</td>
            <td className="flex gap-2">
              <button className="text-blue-500">View Profile</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomer;
