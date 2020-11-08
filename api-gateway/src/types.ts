export type Query = {
  inputSchema?: any;
  outputSchema: any;
  resolve: (variables: any, schema: any) => any;
};
