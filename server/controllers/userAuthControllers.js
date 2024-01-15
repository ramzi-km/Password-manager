import userModel from '../models/userModel.js';

export async function createUser(req, res) {
  try {
    const data = req.body;
    console.log(data);
    const newUser = userModel.build(data);
    console.log(newUser);
    const resUser = await newUser.save();
    res.status(200).json({ user: resUser });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}
