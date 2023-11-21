import React from "react";

import { Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsLink45Deg, BsThreeDots } from "react-icons/bs";
import { HiMiniChevronDown } from "react-icons/hi2";

const DrawerBody = () => {
  return (
    <div className="p-2">
      <h2 className="font-bold mb-1 text-xl text-gray-700">Titre du ticket</h2>
      <div className="flex justify-between mb-1">
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
              <DropdownMenu.Item shortcut="⌘ D">Done</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ W">
                View workflow
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-sm text-gray-700">Description</h3>
      </div>
    </div>
  );
};

export default DrawerBody;
