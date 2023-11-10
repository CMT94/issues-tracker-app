"use client";

import React from "react";

import axios from "axios";

import { Button, Card, Text } from "@radix-ui/themes";
import { AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";
import { Issue } from "@prisma/client";

const IssuesPage = () => {
  const [loadedIssues, setLoadedIssues] = React.useState<Issue[]>([]);
  const [isLoading, setisLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const hasIssues = loadedIssues && loadedIssues.length > 0;

  React.useEffect(() => {
    const getAllIssues = async () => {
      try {
        const response = await axios.get("/api/issues");
        setLoadedIssues(response.data);
        setisLoading(false);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    };

    getAllIssues();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {!isLoading && hasIssues ? (
        <React.Fragment>
          {loadedIssues.map((issue: Issue) => (
            <Card key={issue.id} className="mb-5">
              <Text as="div" size="2" weight="bold">
                {issue.title}
              </Text>
              <Text as="div" color="gray" size="2">
                {issue.description}
              </Text>
            </Card>
          ))}

          <Link href="/issues/new" className="cursor-pointer">
            <Button
              variant="solid"
              className="flex items-center justify-center gap-x-1 transition-colors"
            >
              <AiOutlinePlus size={20} />
              <span>New Issue</span>
            </Button>
          </Link>
        </React.Fragment>
      ) : (
        <div className="flex flex-col items-center gap-y-2">
          <h2>No issue to display.</h2>
          <Link href="/issues/new" className="cursor-pointer">
            <Button
              variant="solid"
              className="flex items-center justify-center gap-x-1 transition-colors"
            >
              <AiOutlinePlus size={20} />
              <span>New Issue</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default IssuesPage;
