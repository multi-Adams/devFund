import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Investor = {
  investments: async ({ _id, investments }, parent, args, ctx, info) => {
    const result = await investmentModel.find({ investor: _id });
    return result;
  },
};

export default Investor;
