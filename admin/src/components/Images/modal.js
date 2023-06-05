import React, { useState } from "react";
import {
  Typography,
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "@strapi/design-system";
import { useIntl } from "react-intl";
import ImagesTabs from "./tabs";

const ImagesModal = ({
  name,
  value,
  current,
  setIsVisible,
  changeData,
  addImage,
  removeImage,
}) => {
  return (
    <ModalLayout
      onClose={() => setIsVisible((prev) => !prev)}
      labelledBy="title"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Choose images
        </Typography>
      </ModalHeader>
      <ModalBody padding={4}>
        <ImagesTabs
          name={name}
          current={current}
          value={value}
          addImage={addImage}
          removeImage={removeImage}
        />
      </ModalBody>
      <ModalFooter
        startActions={
          <Button
            onClick={() => setIsVisible((prev) => !prev)}
            variant="tertiary"
          >
            Cancel
          </Button>
        }
        endActions={
          <>
            <Button
              onClick={() => {
                changeData({
                  target: { name, value: JSON.stringify(value) },
                });
                setIsVisible((prev) => !prev);
              }}
            >
              Save
            </Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default ImagesModal;
