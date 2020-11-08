import { Query } from "../types";
import products from "./products";
import users from "./users";

const queries: Record<string, Query> = {
  products,
  users,
};

export default queries;
