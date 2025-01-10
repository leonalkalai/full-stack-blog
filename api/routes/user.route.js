import express from "express";

const router = express.Router();

router.get("/test", (request, response) => {
  response.json({ message: "api test passed" });
});

export default router;
