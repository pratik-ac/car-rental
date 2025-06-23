import express from "express";
import connectDB from "./database-connection/db.connect.js";
import userRoutes from "./user/user.controller.js";
const app = express();

// to make app understand json
app.use(express.json());

// TODO:enable CORS

// connecting to the database
await connectDB();

// registering the routes
app.use(userRoutes);

// TODO:handle global eroor

// network port and starting the server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
