import { Schema, model } from "mongoose";
import moment from "moment";

const WalletSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  wallet_address: {
    type: String,
    default: "0x0000000000000000000000000000000000000000"
  },
  balance: {
    type: Number,
    default: 0
  },
  energy: {
    type: Number,
    default: 1000
  },
  tap: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 1000
  },
  treasure_date: {
    type: Date,
    default: moment()
  },
});
const Wallet = model("Wallet", WalletSchema);

export default Wallet;