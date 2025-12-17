"use client"
import axios from "axios";
import { log } from "console";
import { useEffect } from "react";

const Accept = () => {
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);



        const body = {
            access_token: params.get("access_token"),
            expires_at: params.get("expires_at"),
            expires_in: params.get("expires_in"),
            provider_token: params.get("refresh_token"),
            refresh_token: params.get("provider_token"),
            token_type: "bearer"
        }

        axios.post("https://ca76b5db61ad.ngrok-free.app/auth/", body).then((w) => {
            console.log(w)
        })



    }, []);
    return (
        <div>

            hello
        </div>
    )
}


export default Accept