import Ajv from "ajv";

const ajv = new Ajv({ removeAdditional: "all" });

export const validateOutput = (schema: any, data: any) => {
  ajv.validate(schema, data);

  return data;
};
