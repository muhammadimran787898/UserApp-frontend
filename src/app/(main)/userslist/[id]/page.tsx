"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import useApi from "@/hooks/useApi";
import * as Yup from "yup";
import axios from "axios";
import { UserFormProps } from "../../useradd/(components)/type";
import UserForm from "../../useradd/page";

export default function UserUpdate({ params }: { params: any }) {
  const [data, setData] = useState<UserFormProps>();

  useEffect(() => {
    const fetchEhr = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/user/userget/${params.id}`
      );
      setData(response.data.data);
    };

    fetchEhr();
  }, [params.id]);

  console.log(data, "nnnn");

  return (
    <>
      <UserForm user={data} />
    </>
  );
}
