import app from "./server";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT_APP || 3000;

app.listen(PORT, () =>{
  console.log(`App listening on port ${PORT}`);
});