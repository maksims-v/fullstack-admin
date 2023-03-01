import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

const Token = model.model('Token', TokenSchema);
export default Token;
