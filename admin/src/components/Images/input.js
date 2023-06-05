import React, { useState } from "react";
import { TextInput, Button } from "@strapi/design-system";

const Input = ({ addImage }) => {
  const [newImage, setNewImage] = useState();
  return (
    <div>
      <TextInput
        placeholder="Image url"
        label="url"
        onChange={(e) => {
          setNewImage(e.target.value);
        }}
        value={newImage}
      ></TextInput>
      <Button
        variant="secondary"
        style={{ marginTop: 4 }}
        onClick={(e) => {
          addImage(newImage);
        }}
      >
        Add image
      </Button>
    </div>
  );
};

export default Input;
