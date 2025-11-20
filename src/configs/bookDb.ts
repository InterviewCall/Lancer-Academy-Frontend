import mongoose from "mongoose";

const db_uri = process.env.DB_URL || '';

async function connectToDb() {
    await mongoose.connect(db_uri);
}

export default connectToDb;