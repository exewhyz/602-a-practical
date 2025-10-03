import mongoose from "mongoose";

const db_uri = "mongodb://user_43ybu26ya:p43ybu26ya@bytexldb.com:5050/db_43ybu26ya"
const connectDb = async () => {
    try {
        await mongoose.connect(db_uri);
        console.log("DB connected");
    } catch (error) {
        console.log("Error connecting DB:", error.message);
    }
}
export default connectDb;