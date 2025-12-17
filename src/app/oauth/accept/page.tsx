"use client"


import axios from "axios";
import Image from "next/image";

import { useEffect, useState } from "react";

const Show = () => {



  const [token, setToken] = useState<string | null>(null);

  const [pic, setPic] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash; // "#access_token=..."
    const params = new URLSearchParams(hash.substring(1));
    const t = params.get('id_token');
    if (t) {
      setToken(t);
      axios.post('http://localhost:3000/google', { id: t }).then((s) => {
        console.log(s)

        setPic(s.data.picture)
      })
      // Remove hash from URL for security
      // history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return <>

    <div className="">

      {pic &&

        <Image src={pic || ''} alt={token || ''} />
      }
    </div>


  </>;
};

export default Show;
// 



// 123SMDuwh@@#@Q!