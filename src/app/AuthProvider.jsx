'use client'
const { KindeProvider } = require("@kinde-oss/kinde-auth-nextjs")

export const AuthProvider = ({ children }) => {
    return (
        <KindeProvider
            kindeDomain={process.env.KINDE_ISSUER_URL}
            clientId={process.env.KINDE_CLIENT_ID}
            redirectUri={`${process.env.NEXT_PUBLIC_URL}/api/auth/kinde_callback`}
        >{children}</KindeProvider>
    )
}