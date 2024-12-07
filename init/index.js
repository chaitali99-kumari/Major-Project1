const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then((req,res)=>{
    console.log("connect to db");
})
.catch(err=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj, owner:'674534d2548b8b9ac5e42d1b'}))
    await Listing.insertMany(initData.data);
    console.log("data was initiallizing");
}

initDB();