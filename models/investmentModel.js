import mongoose from "mongoose";
const { Schema } = mongoose;

const investmentSchema = new Schema({
  investAmount: { type: String, required: true },
  paid: { type: Boolean, required: true },
  returned: { type: Boolean, required: true },
  partner: { type: Boolean, required: true },
  investor: { type: String, required: true },
});

// investmentSchema.method("toJSON", function () {
//   const obj = this.toObject();
//   Object.assign({ __v, _id }, data);
//   data.id = _id;
//   return data;
// });

const investmentModel = mongoose.model("investments", investmentSchema);

module.exports = investmentModel;
