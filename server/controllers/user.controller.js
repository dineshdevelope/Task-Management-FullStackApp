import User from "../models/user.model.js";

export const UserIndex = async (req, res) => {
  try {
    const finduser = await User.find();
    const user = finduser.reverse();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const CreateUser = async (req, res) => {
  //Create Id,Title,Discription
  // res.send("Createing all Users");
  //console.log(req.body);

  const newUser = new User({
    title: req.body.title,
    message: req.body.message,
  });

  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  //return res.json(req.body);
};

export const SingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: "Can't find User" });
    } else {
      return res.status(400).json(user);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        message: req.body.message,
      },
      {
        new: true,
      }
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const DeleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.deleteOne({ _id: userId });
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
