import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Query = {
  investors: async (parent, args, ctx, info) => {
    const results = await investorModel.find();
    return results;
  },

  investor: async (parent, args, ctx, info) => {
    const invExists = await investorModel.findById({ _id: args.id });
    if (!invExists) {
      console.log("No such Id!");
    }
    const result = await investorModel.findById(args.id);
    return result;
  },

  developers: async (parent, args, ctx, info) => {
    const results = await developerModel.find();
    return results;
  },

  developer: async (parent, args, ctx, info) => {
    const devExists = await developerModel.findById({ _id: args.id });
    if (!devExists) {
      console.log("No such Id!");
    }
    const result = await developerModel.findById(args.id);
    return result;
  },

  proposals: async (parent, args, ctx, info) => {
    const results = await proposalModel.find();
    return results;
  },
  investments: async (parent, args, ctx, info) => {
    const investments = await investmentModel.find();
    return investments;
  },
};

export default Query;
