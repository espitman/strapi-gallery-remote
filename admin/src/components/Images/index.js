import React, { useState } from "react";
import { Stack, Card, Typography, Button, Flex } from "@strapi/design-system";
import { useIntl } from "react-intl";
import ImagesModal from "./modal";

const Images = ({
  name,
  onChange: changeData,
  intlLabel,
  required,
  description,
  disabled,
  value: current = [],
}) => {
  const [value, setArray] = useState(JSON.parse(current));
  const [isVisible, setIsVisible] = useState(false);
  const [error] = useState();
  const { formatMessage } = useIntl();
  const addImage = (img) => {
    setArray((oldArray) => [...oldArray, img]);
  };
  const removeImage = (img) => {
    setArray((oldArray) => oldArray.filter((item) => item != img));
  };
  return (
    <Stack>
      <Typography variant="h1" fontWeight="bold">
        {formatMessage(intlLabel)}
      </Typography>
      {required && (
        <Typography variant="pi" fontWeight="bold" textColor="danger600">
          *
        </Typography>
      )}
      <Card
        style={{ width: "100%" }}
        padding={4}
        background="primary"
        shadow="filterShadow"
      >
        <Flex style={{ "flex-wrap": "wrap", marginBottom: "12px" }}>
          {value.map((img, index) => (
            <img
              style={{
                width: "64px",
                height: "64px",
                margin: "2px",
                objectFit: "cover",
              }}
              src={img}
            />
          ))}
        </Flex>
        <Button onClick={() => setIsVisible((prev) => !prev)}>
          Choose images
        </Button>
        {isVisible && (
          <ImagesModal
            name={name}
            current={current}
            value={value}
            setIsVisible={setIsVisible}
            changeData={changeData}
            addImage={addImage}
            removeImage={removeImage}
          />
        )}
      </Card>
    </Stack>
  );
};

export default Images;
