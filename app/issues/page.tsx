import React from "react";

import { Button } from "@radix-ui/themes";
import { AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";

const IssuesPage = () => {
  return (
    <Link href="/issues/new" className="cursor-pointer">
      <Button
        variant="solid"
        className="flex items-center justify-center gap-x-1 transition-colors"
      >
        <AiOutlinePlus size={20} />
        <span>New Issue</span>
      </Button>
    </Link>
  );
};

export default IssuesPage;
