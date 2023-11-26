import React from "react";

import { Controller, useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

import { IssueForm, Status } from "@/types";
import { StatusEnum } from "@/enum/StatusEnum";

import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";

import { HiMiniChevronDown } from "react-icons/hi2";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsLink45Deg, BsThreeDots } from "react-icons/bs";

interface IssueFormProps {
  id?: number | undefined;
  title?: string | undefined;
  description?: string | undefined;
  status?: Status | undefined;
}

const IssueForm = ({ id, title, description, status }: IssueFormProps) => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const editorRef = React.useRef<any>(null);

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const toggleEditMode = () =>
    setIsEditMode((prevState: boolean) => !prevState);

  const submitHandler = (ev: any) => {
    ev.preventDefault();

    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log({ content });
    }
  };

  React.useEffect(() => {
    if (editorRef && editorRef.current) {
      editorRef.current.focus();
    }
  }, [editorRef]);

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <h2 className="font-bold mb-1 text-xl text-gray-700">
        {title ? title : "What needs to be done?"}
      </h2>
      <div className="flex justify-between mb-5">
        <div className="flex items-center space-x-2 ">
          <div className="cursor-pointer p-1 border rounded-sm bg-gray-100 border-gray-100">
            <AiOutlinePaperClip size={18} />
          </div>
          <div className="cursor-pointer p-1 border rounded-sm bg-gray-100 border-gray-100">
            <BsLink45Deg size={18} />
          </div>
          <div className="cursor-pointer p-1 border rounded-sm bg-gray-100 border-gray-100">
            <BsThreeDots size={18} />
          </div>
        </div>
        <div className="flex space-x-2">
          <Avatar
            size="1"
            radius="full"
            variant="solid"
            color="indigo"
            fallback="CM"
          />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" size="1">
                To Do
                <HiMiniChevronDown size={10} />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Item shortcut="⌘ P">In Progress</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ T">In Test</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Closed</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ W">
                View workflow
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-base text-gray-700 text-">Description</h3>
        {isEditMode ? (
          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={description ? description : ""}
                  init={{
                    height: 250,
                    menubar: false,
                    plugins:
                      "mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  {...field}
                />
              )}
            />

            <div className="flex justify-end gap-x-1">
              <Button
                color="red"
                variant="outline"
                className="cursor-pointer"
                onClick={toggleEditMode}
              >
                Cancel
              </Button>
              <Button type="submit">Create Issue</Button>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="min-h-[100px] border-2 rounded-md cursor-pointer p-2"
              onClick={toggleEditMode}
            >
              <p className="text-sm">{description}</p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default IssueForm;
