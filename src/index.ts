import app from "./server";
import * as dotenv from "dotenv";
import connectDB from "./API/db/connection";

dotenv.config();

const PORT = process.env.PORT_APP || 3000;

connectDB().then(() => {
  app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});