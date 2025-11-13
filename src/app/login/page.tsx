"use client"

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Show = () => {


  const [link, setLink] = useState<string>()

  const Google = {
    clientID: "23967475973-ginlrgh2j8b4aqhtt613r3lut6k9e981.apps.googleusercontent.com",
    RedicetIRI: "http://localhost:6100/oauth/accept"
  }


  useEffect(() => {




    const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    const params = {
      'client_id': Google.clientID,
      'redirect_uri': Google.RedicetIRI,
      'response_type': 'token id_token',
      'scope': 'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/user.phonenumbers.read',
      'include_granted_scopes': 'true',
      'state': 'pass-through-value',
      'nonce': 'random-string-here'
    };

    const queryString = new URLSearchParams(params).toString();
    const OUTURL = `${oauth2Endpoint}?${queryString}`




    setLink(OUTURL)




  }, [Google.RedicetIRI,Google.clientID])


  return <>

    <div className="">

      <a href={link}>

        <Button >
          kazem
        </Button>
      </a>
    </div>


  </>;
};

export default Show;
// 



// 123SMDuwh@@#@Q!