import React, { useState } from "react";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from "@strapi/design-system";
import Input from "./input";
import Manager from "./manager";

const ImagesTabs = ({ name, current, value, addImage, removeImage }) => {
  return (
    <Stack>
      <Box padding={4} background="primary100">
        <TabGroup
          label="Some stuff for the label"
          id="tabs"
          onTabChange={(selected) => console.log(selected)}
        >
          <Tabs>
            <Tab>Add new</Tab>
            <Tab>Images</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Box color="neutral800" padding={4} background="neutral0">
                <Input addImage={addImage} />
              </Box>
            </TabPanel>
            <TabPanel>
              <Box color="neutral800" padding={4} background="neutral0">
                <Manager
                  currents={current}
                  value={value}
                  removeImage={removeImage}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Box>
    </Stack>
  );
};

export default ImagesTabs;
