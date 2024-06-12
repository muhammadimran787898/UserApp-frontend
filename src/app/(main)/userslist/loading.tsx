import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div >
      <Skeleton className="pl-20 w-20 h-20 bg-slate-400 " />
    </div>
  );
};

export default loading;
