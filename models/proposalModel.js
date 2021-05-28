import mongoose from "mongoose";
const { Schema } = mongoose;

const proposalSchema = new Schema({
  amount: { type: String, required: true },
  pictures: { type: String, required: true },
  documents: { type: String, required: true },
  developer: { type: String, required: true },
});

// proposalSchema.method("toJSON", function () {
//   const obj = this.toObject();
//   Object.assign({ __v, _id }, data);
//   data.id = _id;
//   return data;
// });

const proposalModel = mongoose.model("proposals", proposalSchema);

module.exports = proposalModel;
