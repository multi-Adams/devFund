import mongoose from "mongoose";
import proposalModel from "../models/proposalModel";

const { Schema } = mongoose;

const developerSchema = new Schema({
  proposals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "proposals",
    },
  ],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
});

const investorSchema = new Schema({
  investments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "investments",
    },
  ],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
});

// developerSchema.method("toJSON", function () {
//   const obj = this.toObject();
//   Object.assign({ __v, _id }, data);
//   data.id = _id;
//   return data;
// });
// investorSchema.method("toJSON", function () {
//   const obj = this.toObject();
//   Object.assign({ __v, _id }, data);
//   data.id = _id;
//   return data;
// });

// {"userType" : "Developer",
// "firstName" : "Ade",
// "lastName" : "Adams",
// "dob" : "29-01-1989"}

// comments: [
//   {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Comment"
//   }
// ]

const investorModel = mongoose.model("investors", investorSchema);
const developerModel = mongoose.model("developers", developerSchema);

module.exports = {
  developerModel,
  investorModel,
};
