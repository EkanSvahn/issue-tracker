import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Enter a title">
      </TextField.Root>
        <TextArea></TextArea>
        <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
