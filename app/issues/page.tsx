"use client";

import React from "react";

import axios from "axios";

import { Button, Card, Text } from "@radix-ui/themes";
import { AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";
import { Issue } from "@prisma/client";

const IssuesPage = () => {
  const [loadedIssues, setLoadedIssues] = React.useState<Issue[]>([]);

  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const getAllIssues = async () => {
      try {
        const response = await axios.get("/api/issues");
        setLoadedIssues(response.data);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    };

    getAllIssues();
  }, []);

  return (
    <React.Fragment>
      {loadedIssues && loadedIssues.length > 0 ? (
        loadedIssues.map((issue: Issue) => (
          <Card key={issue.id} className="mb-5">
            <Text as="div" size="2" weight="bold">
              {issue.title}
            </Text>
            <Text as="div" color="gray" size="2">
              {issue.description}
            </Text>
          </Card>
        ))
      ) : (
        <span>No issue to display</span>
      )}

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
  );
};

export default IssuesPage;
