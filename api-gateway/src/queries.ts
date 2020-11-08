import productsQuery from "./products";

const queries: Record<
  string,
  (
    variables: Record<string, unknown>,
    schema: Record<string, unknown>
  ) => Promise<any>
> = {
  products: productsQuery,
};

export default queries;
