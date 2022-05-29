import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { instance } from "../../../Utilities";

export default NextAuth({
    pages: {

    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "UserName", type: "text", placeholder: "eposta" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const result = await instance.post(`${process.env.NEXT_PUBLIC_API_URL}/Login/Login`, {
                    eMail: credentials.username,
                    password: credentials.password,
                    rePassword: credentials.password,
                }).then(data => {

                    return data?.data?.entity;
                }).catch((err) => {
                    return null;
                });




                if (result) {
                    return result;
                }

                return null;
                // Return null if user data could not be retrieved

            }
        })
    ],
    session: {
        jwt: true,
    },
    jwt: {

        signingKey: process.env.NEXTAUTH_JWT_SIGNING_SECRET,
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return "/Admin/Dashboard"
        },
        async jwt({ token, user, account, profile, isNewUser }) {

            if (user) {
                token.jwt = user.token || token.token;
                token.email = user.eMail || token.token;
                token.nameSurname = user.nameSurname || token.nameSurname;
                console.log("Token 1 is", token);
                return token;
            }
            return token;

        },
        async session({ session, token, user }) {
            session.jwt = token.jwt;
            session.email = token.eMail;
            session.nameSurname = token.nameSurname;
            return session
        }
    }
});