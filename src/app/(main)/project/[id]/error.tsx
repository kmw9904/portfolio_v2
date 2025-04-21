"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return <div>에러</div>;
}
