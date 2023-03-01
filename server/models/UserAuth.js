import mongoose from 'mongoose';

const UserAuthSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

const UserAuth = model.model('UserAuth', UserAuthSchema);
export default UserAuth;
