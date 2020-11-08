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
      orders: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
          },
        },
      },
    },
  },
};

async function resolve(variables: any, schema: any) {
  const users = data.users;

  if (schema.items.properties.orders) {
    return users.map((u) => ({
      ...u,
      orders: data.orders.filter((o) => o.userId === u.id),
    }));
  }

  return users;
}

export default {
  outputSchema,
  resolve,
};
