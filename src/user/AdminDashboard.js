import React from "react";

import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <div className="mb-5 border rounded h-fit w-auto sm:w-fit overflow-hidden shadow-lg">
        <h4 className="bg-black w-auto sm:w-fit text-center text-white sm:px-32 py-3 rounded-t">
          Admin Links
        </h4>
        <div className="my-6 ">
          <div className="my-4">
            <a
              href="/create/category"
              className=" text-center grid  py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest"
            >
              Create Category
            </a>
          </div>

          <div className="my-4">
            <a
              href="/create/product"
              className="text-center grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest"
            >
              Create Product
            </a>
          </div>

          <div className="my-4">
            <a
              href="/admin/orders"
              className="text-center  grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest"
            >
              Manage Orders
            </a>
          </div>

          <div className="my-4">
            <a
              href="/admin/products"
              className=" text-center  grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest"
            >
              Manage Products
            </a>
          </div>
        </div>
      </div>
    );
  };

  const adminInfo = () => {
    return (
      <div className=" mb-5 border w-auto md:w-fit overflow-hidden shadow-lg">
        <h3 className="bg-black text-white text-center sm:px-20 py-2 rounded-t">
          Admin Information
        </h3>
        <div className="flex w-auto md:w-fit justify-arround  ">
          <div>
            <ul className="mt-7 mx-4">
              <li className="rounded w-full md:w-fit px-2 px-2 tracking-widest text-sm font-bold">
                {name}
              </li>
              <li className="rounded w-full md:w-fit px-2  mt-1 font-bold tracking-widest text-sm  mb-1">
                {email}
              </li>
              <li className=" my-2 px-2 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {role === 1 ? "Admin" : `User id : ${_id}`}
              </li>
            </ul>
          </div>
          <div className="content-start">
            <img
              className="w-36 hidden"
              src="https://thumbs.dreamstime.com/b/admin-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135742404.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title="Admin Dashboard"
      description={`Welcome, ${name}`}
      className=""
    >
      <div className="flex-col md:flex md:flex-row lg:justify-between mx-4 mt-16">
        <div className="col-4">{adminLinks()}</div>

        <div className="col-8">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
