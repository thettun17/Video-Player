import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { ConnectToDB } from "@/utils/database";
import User from "@/models/user";

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
}

const handler = NextAuth({
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({ email: session.user?.email });
            return session;
        },

        async signIn({ profile }) {
            if (!profile?.email) {
                console.error("Profile or email is undefined");
                return false;
            }

            try {
                await ConnectToDB();
                
                const userExit = await User.findOne({ email: profile.email });
                console.log("userExit", userExit);
                if (!userExit) {
                    await User.create({
                        email: profile.email,
                        username: profile.email.split("@")[0],
                        image: profile.image || 'testingimage'
                    });
                }
                return true;
            } catch (error) {
                console.log("error signing in", error);
                return false;
            }
        }
    }

})

export { handler as GET, handler as POST }