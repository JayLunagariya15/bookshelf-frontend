import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { useHistory } from "react-router-dom";
import { createCategory } from "./ApiAdmin";

const AddCateogary = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError(false);
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    // make request to backend to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError(false);
        setSuccess(true);
        history.push("/admin/dashboard");
      }
    });
  };

  const newCategoryForm = () => (
    <form className="container max-w-sm mx-auto md:max-w-2xl xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden justify-between mx-4">
      <div className="w-full xl:w-full p-8">
      <h1 className=" text-2xl font-bold text-center">Create New Category</h1>
        <div className="mb-6 mt-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            onChange={handleChange}
            type="name"
            className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
            value={name}
            placeholder="Enter your category name"
            required
          />
        </div>
        <div className="flex w-full mt-2">
          <button
            onClick={clickSubmit}
            className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          >
            Submit
          </button>
        </div>
        <div></div>
      </div>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return (
        <h3 className="w-full max-w-3xl text-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
          {name} is created
        </h3>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <div className="flex justify-center">
          <h3 className="w-full max-w-xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center">
            {name} is not unique
          </h3>
        </div>
      );
    }
  };

  return (
    <Layout
      title="Add a new Category"
      description={`Ready to add a new category?`}
    >
      <div className="row">
        <div className="block w-full xs:w-auto xs:col-12 sm:col-span-8">
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
        </div>
      </div>
    </Layout>
  );
};

export default AddCateogary;
