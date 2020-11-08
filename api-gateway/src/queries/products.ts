import data from "./fake-data.json";

const outputSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string",
      },
      name: {
        type: "string",
      },
      category: {
        type: "string",
      },
    },
  },
};

async function resolve() {
  return data.products;
}

export default {
  outputSchema,
  resolve,
};
