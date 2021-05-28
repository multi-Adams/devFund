import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Investment = {
  investor: async ({ investor }, args, parent, ctx, info) => {
    const result = await investorModel.findById({ _id: investor });
    return result;
  },
};
export default Investment;
