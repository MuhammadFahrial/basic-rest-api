import Users from "../models/UsersModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const response = await Users.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUsers = async (req, res) => {
  try {
    await Users.create(req.body);
    res.status(201).json({ msg: "User created", data: req.body });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUsers = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated", data: req.body });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUsers = async (req, res) => {
  try {
    await Users.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
