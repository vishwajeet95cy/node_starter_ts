import express, { Application, Request, Response } from "express";

require("dotenv").config();
const cors = require("cors");
const app: Application = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// GET REQUEST
app.get("/customers", (req: Request, res: Response) => {
  const customers = [
    { name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
    {
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  return res.status(200).json(customers);
});
