import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI is missing in your environment variables!");
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

export const auth = betterAuth({
    database: mongodbAdapter(db),

    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",


    secret: process.env.BETTER_AUTH_SECRET,


    trustedOrigins: [
        "https://b13-a08-qurbani-hat-8fto.vercel.app",
        "http://localhost:3000"
    ],

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
    },
});