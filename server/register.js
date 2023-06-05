"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "images",
    plugin: "gallery-remote",
    type: "json",
  });
};
