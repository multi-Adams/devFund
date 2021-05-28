import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Proposal = {
  developer: async ({ developer }, args, parent, ctx, info) => {
    const result = await developerModel.findById({ _id: developer });
    // console.log(developer);
    // console.log(result);
    return result;
  },
};
export default Proposal;
