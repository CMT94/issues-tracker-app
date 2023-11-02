"use client";

import React from "react";

import { TextField, Button } from "@radix-ui/themes";

import { useForm, Controller } from "react-hook-form";
import { IssueForm } from "@/types";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="max-w-xl space-y-3"
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Create Issue</Button>
    </form>
  );
};

export default NewIssuePage;
