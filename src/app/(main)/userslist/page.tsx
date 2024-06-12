"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";
import Link from "next/link";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "@/components/pagination";

interface User {
  _id?: number;
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other"; // Using union types for gender
  age: number;
  mobile: string;
  state: string;
  city: string;
  status?: string;
}

export default function UsersList() {
  const router = useRouter();

  const [userdata, setUserdata] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const ItemsPerPages = 10;

  const handlerouter = (id: any) => {
    const editUserUrl = `/userslist/${id}`;
    router.push(editUserUrl);
  };

  const handleDelete = useCallback((id: any) => {
    const deleteuser = axios.delete(
      `http://localhost:5000/api/v1/user/userdelete/${id}`
    );
    setUserdata((prevUserData) =>
      prevUserData.filter((user) => user._id !== id)
    );
  }, []);

  const fetchUser = async (limit: number, page: number) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/user/userlist/${limit}/${page}`
      );
      setUserdata(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser(ItemsPerPages, currentPage);
  }, [currentPage]);

  console.log(userdata, "jkl");
  return (
    <>
      <div className="container">
        <div className="overflow-y-auto">
          <Table className="">
            <TableHeader className="">
              <TableRow className="text-black font-bold text-xl space-x-20">
                <TableHead className="text-black text-center font-bold text-xl">
                  Name
                </TableHead>
                <TableHead className="text-black text-center font-bold text-xl">
                  Email
                </TableHead>
                <TableHead className="text-center  text-black font-bold text-xl">
                  Gender
                </TableHead>
                <TableHead className="text-center text-black font-bold text-xl">
                  Age
                </TableHead>
                <TableHead className="text-center text-black font-bold text-xl">
                  Mobile
                </TableHead>
                <TableHead className="text-center text-black font-bold text-xl">
                  City
                </TableHead>
                <TableHead className="text-center text-black font-bold text-xl">
                  State
                </TableHead>
                <TableHead className="text-center text-black font-bold text-xl">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userdata?.map((i, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center font-medium">
                    {i?.name}
                  </TableCell>
                  <TableCell className=" text-center font-medium">
                    {i?.email}
                  </TableCell>
                  <TableCell className="text-center  font-medium ">
                    {i?.gender}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {i?.age}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {i?.mobile}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {i.city}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {i.state}
                  </TableCell>
                  <TableCell className="flex justify-center text-center">
                    <button
                      onClick={() => handlerouter(i?._id)}
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(i?._id)}
                      className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total Users {userdata.length}</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
