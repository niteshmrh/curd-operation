const express = require("express"); // express
const cors = require("cors"); // for cross plateform
const bodyParser = require("body-parser"); // data in json formate
const ApiRoutes = require("./src/routes/index");

const PORT = process.env.PORT || 4000; // default port 4000

const setupAndStartServer = async () => {
  //create the express object
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartServer();
