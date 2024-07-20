import express from "express";
import UsersRoute from "./routes/UsersRoute.js";

const app = express();

app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("Data langsung sebelum management file");
// });
app.use(UsersRoute);

app.listen(5000, () => console.log("Server up and running..."));
