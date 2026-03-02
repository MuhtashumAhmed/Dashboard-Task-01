"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    toast.error(error.message);
  }, [error]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold">Something went wrong.</h2>
      <Button onClick={() => reset()} className="mt-4 cursor-pointer ">
        Try again
      </Button>
    </div>
  );
}
