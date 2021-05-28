import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Developer = {
  proposals: async ({ _id }, parent, args, ctx, info) => {
    // console.log("id", _id);
    const result = await proposalModel.find({ developer: _id });
    // console.log("results", result);
    return result;
  },
};

export default Developer;
