import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardAction,
  CardAsset,
  CardContent,
  CardBadge,
  CardSubtitle,
  IconButton,
  CardTimer,
  Flex,
} from "@strapi/design-system";
import Trash from "@strapi/icons/Trash";

const Manager = ({ currents, value, removeImage }) => {
  const images = JSON.parse(currents);
  return (
    <Flex style={{ "flex-wrap": "wrap" }}>
      {value.map((img, index) => (
        <Card
          style={{
            width: "32%",
            margin: "4px",
          }}
          id="first"
        >
          <CardHeader>
            <CardAction position="end">
              <IconButton
                label="Remove"
                icon={<Trash />}
                onClick={() => {
                  removeImage(img);
                }}
              />
            </CardAction>
            <CardAsset src={img} />
            {!images.includes(img) && (
              <CardTimer style={{ backgroundColor: "transparent" }}>
                <CardBadge>Unsaved!</CardBadge>
              </CardTimer>
            )}
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardSubtitle>Image</CardSubtitle>
            </CardContent>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default Manager;
