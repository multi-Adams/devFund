import mongoose from "mongoose";

import { developerModel, investorModel } from "../../models/userModel";
import proposalModel from "../../models/proposalModel";
import investmentModel from "../../models/investmentModel";

const Mutation = {
  addDeveloper: async (parent, args, ctx, info) => {
    const emailExists = await developerModel.exists({
      email: args.data.email,
    });
    if (emailExists) {
      console.log("emailExists");
      throw new Error("Email Exists Already!");
    }
    if (args.data) {
      const response = await developerModel.create({ ...args.data });
      return response;
    }
  },

  addInvestor: async (parent, args, ctx, info) => {
    const emailExists = await investorModel.exists({
      email: args.data.email,
    });
    if (emailExists) {
      console.log("emailExists");
      throw new Error("Email Exists Already!");
    }
    if (args.data) {
      const response = await investorModel.create({ ...args.data });
      return response;
    }
  },
  addProposal: async (parent, args, ctx, info) => {
    const result = await proposalModel
      .create({ ...args.data })
      .then((proposal) => {
        developerModel.findByIdAndUpdate(
          proposal.developer,
          { $push: { proposals: proposal._id } },
          { new: true, useFindAndModify: false }
        );
        // console.log("proposal", proposal);
        return proposal;
      });
    // console.log("result", result);
    return result;
  },
  addInvestment: async (parent, args, ctx, info) => {
    console.log(args.data);
    // const invExists = await investorModel.exists({
    //   _id: args.data.investor,
    // });
    // console.log("invExists", invExists);
    // if (!invExists) {
    //   throw new Error("Investor does not exist");
    // }

    const result = await investmentModel
      .create({ ...args.data })
      .then((investment) => {
        investorModel.findByIdAndUpdate(
          investment.investor,
          { $push: { investments: investment._id } },
          { new: true, useFindAndModify: false }
        );
        return investment;
      });
    return result;
  },
};

export default Mutation;
