export const getUsers = (req, res) => {
  const data = {
    id: "1",
    name: "Rial",
    address: "Belopa",
  };
  res.json({ message: "Get User", data: data });
};

export const createUsers = (req, res) => {
  console.log(req.body);
  res.json({ message: "Create User", data: req.body });
};

export const updateUsers = (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  res.json({ message: "Update User", data: req.body });
};

export const deleteUsers = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Delete Success",
    data: {
      id: id,
      name: "Rial",
      address: "Belopa",
    },
  });
};
