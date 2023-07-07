const { people } = require("../data.js");

const getPerson = (req, res) => {
  res.status(200).json({ status: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  console.log("name is ", name);

  res.status(200).json({ status: true, person: name });
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const newPerson = people.find((person) => person.id === Number(id));
  if (!newPerson) {
    return res
      .status(404)
      .json({ status: false, message: `No person found with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ status: true, data: newPeople });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const newPerson = people.find((person) => person.id === Number(id));

  if (!newPerson) {
    return res
      .status(404)
      .json({ status: false, message: `No person found with this id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  return res.status(200).json({ status: true, data: newPeople });
};

module.exports = {
  createPerson,
  deletePerson,
  updatePerson,
  getPerson,
};
