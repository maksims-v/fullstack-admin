import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send('User was created');
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return res.status(404).send(`User not found`);

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send('Wrong password or username');

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_KEY,
    );

    const { password, ...info } = user._doc;

    res.cookie('accessToken', `${token}`, {
      httpOnly: true,
    });
    res.status(200);
    res.send(info);
  } catch (error) {
    res.status(500).send(`Something went wrong! ${req}`);
  }
};

export const logout = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return res.json(token);
  } catch (e) {}
};
