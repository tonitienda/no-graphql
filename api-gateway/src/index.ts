import express from "express";
import cors from "cors";
import queries from "./queries";
import { validateOutput } from "./validator";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/query", async (req, res) => {
  console.log(`Post to /query received`);
  const { name, variables, schema } = req.body;
  const query = queries[(name as unknown) as string];

  if (!query) {
    return res.status(400).send(`Operation not supported: query ${name}`);
  }

  console.log({ name, variables, schema });

  const result = await query(variables, schema);
  const validated = validateOutput(schema, result);

  res.send(validated);
});

app.listen(4000, () => console.log("Api listening to 4000"));
