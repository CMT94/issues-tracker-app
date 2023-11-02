import React from "react";

import { Button } from "@radix-ui/themes";
import { AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";

const IssuesPage = () => {
  return (
    <Button
      color="cyan"
      variant="solid"
      className="cursor-pointer transition-colors"
    >
      <Link
        href="/issues/new"
        className="flex items-center justify-center gap-x-1"
      >
        <AiOutlinePlus size={20} />
        <span>New Issue</span>
      </Link>
    </Button>
  );
};

export default IssuesPage;
