import express from "express";
import { router } from "./routes/route";
import connection from "./database/db_config";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4000;

app.use('/', router);

connection();

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
