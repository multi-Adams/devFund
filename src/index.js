import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import Developer from "../src/resolvers/Developer";
import Mutation from "../src/resolvers/Mutation";
import Query from "../src/resolvers/Query";
import Proposal from "../src/resolvers/Proposal";
import Investor from "../src/resolvers/Investor";
import Investment from "../src/resolvers/Investment";

mongoose
  .connect(
    // "mongodb+srv://dbuser:ade010499@my-db.hgd6l.mongodb.net/devLendDb?retryWrites=true&w=majority",
    "mongodb://localhost:27017/DevLendDb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Db connected");
  });

//  // {firstName:"Adams",email:"ade@l.com",lastName:"Ade",dob:"11-09-1988",proposals:[],}

// resolvers
const resolvers = {
  Developer,
  Query,
  Mutation,
  Proposal,
  Investor,
  Investment,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});

server.start(() => {
  console.log(`server started!`);
});
