const express = require("express");

const router = express.Router();
const {
  createPerson,
  updatePerson,
  deletePerson,
  getPerson,
} = require("../../Controller/People.js");

// router.get("/", getPerson);
// router.post("/", createPerson);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

//other way doing it

router.route("/").get(getPerson).post(createPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
