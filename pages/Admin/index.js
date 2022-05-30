import React, { useState } from "react";
import { getCsrfToken } from "next-auth/react"
import styles from './index.module.scss';
import { useRouter } from "next/router";
import SignInError from "../../Components/Admin/SignInError";
import { signIn } from "next-auth/react";

const Admin = ({ csrfToken }) => {
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    const router = useRouter();
    const { error } = router.query;

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn('credentials', { username: email, password, callbackUrl: `/Admin/Dashboard` });

    }
    return (
        <div className={styles.wrapper}>
            <form method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                {error &&
                    <div className="mb-3">
                        <SignInError error={error} />
                    </div>
                }
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">E-Posta Adresiniz</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Şifreniz</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={async (e) => await handleSubmit(e)} className="btn btn-primary float-end">Giriş</button>
                <div className="clearfix"></div>
            </form>
        </div>
    );
}

export default Admin;
export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}
