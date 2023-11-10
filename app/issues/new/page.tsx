"use client";

import React from "react";

import axios from "axios";

import { TextField, Button } from "@radix-ui/themes";

import { useForm, Controller } from "react-hook-form";
import { IssueForm } from "@/types";

import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

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
          <SimpleMDE placeholder="Description" {...field} ref={null} />
        )}
      />

      <Button>Create Issue</Button>
    </form>
  );
};

export default NewIssuePage;
