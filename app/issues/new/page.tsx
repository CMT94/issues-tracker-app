"use client";

import React from "react";

import axios from "axios";

import { TextField, Button, Callout } from "@radix-ui/themes";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { IssueForm } from "@/types";

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = React.useState<string | null>(null);

  const submitHandler = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error: any) {
      console.log(error);
      setError("An unexpected error occured.");
    }
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        onSubmit={handleSubmit((data) => submitHandler(data))}
        className="space-y-3"
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>

        {/* <Controller
          name="description"
          control={control}
          render={({ field }) => (
            // <SimpleMDE placeholder="Description" {...field} ref={null} />
          )}
        /> */}

        <Button>Create Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
