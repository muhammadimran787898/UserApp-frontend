"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// interface User {
//   name: string;
//   email: string;
//   age: string;
//   mobile: string;
//   gender: string;
//   state: string;
//   city: string;
//   address: string;
//   country: string;
//   _id: string;
// }

export default function UserForm({ user }: { user: any }) {
  console.log(user, "lon");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      mobile: "",
      gender: "",
      state: "",
      city: "",
      address: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .required("Age is required"),
      mobile: Yup.string().required("Mobile number is required"),
      gender: Yup.string().required("Gender is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      address: Yup.string().required("Address is required"),
      country: Yup.string().required("Address is required"),
    }),

    onSubmit: async (values) => {
      console.log(values, "nnnn");
      try {
        if (user) {
          const response = await axios.patch(
            `http://localhost:5000/api/v1/user/userupdate/${user?._id}`,
            values
          );
          router.push("/userslist");
        } else {
          const response = await axios.post(
            "http://localhost:5000/api/v1/user/useradd",
            values
          );
          router.push("/userslist");
        }
      } catch (error) {
        console.error("There was an error adding the user:", error);
      }
    },
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        name: user.name,
        email: user.email,
        age: user.age,
        mobile: user.mobile,
        gender: user.gender,
        state: user.state,
        city: user.city,
        address: user.address,
        country: user.country,
      });
    }
  }, [user]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container max-w-2xl mx-auto space-y-8"
    >
      <div className="flex justify-around mt-1 sm:mt-0 sm:col-span-2">
        <div className="form">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            className="input text-black"
            placeholder="Name"
            type="text"
            defaultValue={user?.name}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            className="input text-black"
            placeholder="Email"
            type="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
      </div>

      <div className="flex justify-around mt-1 sm:mt-0 sm:col-span-2">
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            Age
          </label>
          <input
            className="input text-black"
            placeholder="Age"
            type="number"
            {...formik.getFieldProps("age")}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500">{formik.errors.age}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            Mobile
          </label>
          <input
            className="input text-black"
            placeholder="Mobile"
            type="number"
            {...formik.getFieldProps("mobile")}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500">{formik.errors.mobile}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
      </div>

      <div className="flex justify-around mt-1 sm:mt-0 sm:col-span-2">
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            Gender
          </label>

          <input
            className="input text-black"
            placeholder="Gender"
            type="gender"
            {...formik.getFieldProps("gender")}
          />
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500">{formik.errors.gender}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            State
          </label>

          <input
            className="input text-black"
            placeholder="State"
            type="text"
            {...formik.getFieldProps("state")}
          />
          {formik.touched.state && formik.errors.state ? (
            <div className="text-red-500">{formik.errors.state}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
      </div>

      <div className="flex justify-around mt-1 sm:mt-0 sm:col-span-2">
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            City
          </label>
          <input
            className="input text-black"
            placeholder="City"
            type="text"
            {...formik.getFieldProps("city")}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
        <div className="form">
          <label htmlFor="email" className="block text-gray-700">
            Address
          </label>

          <input
            className="input text-black"
            placeholder="Address"
            type="text"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
          <span className="input-border"></span>
        </div>
      </div>

      <div className="form mx-auto">
        <label htmlFor="email" className="block text-gray-700">
          Country
        </label>

        <input
          className="input text-black"
          placeholder="country"
          type="country"
          {...formik.getFieldProps("country")}
        />
        {formik.touched.country && formik.errors.country ? (
          <div className="text-red-500">{formik.errors.country}</div>
        ) : null}
        <span className="input-border"></span>
      </div>

      <button
        type="submit"
        className="flex justify-center mx-auto bg-blue-500 text-white p-2 rounded"
      >
        {user ? "Upadte User" : "Add User"}
      </button>
    </form>
  );
}
