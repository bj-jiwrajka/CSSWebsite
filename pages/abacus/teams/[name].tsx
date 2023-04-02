import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import data from "../../../_json/events/events.json";
import AbacusTeamsComponent from "../../../style-guide/components/Abacus-Teams-Page";

const RegisterPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try{
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/abacus`)
        .then((res) => res.json())
        .then((response) => {
          console.log({ response });
          setData(response.events);
        })
        .catch((err)=>{
      err.response?
      alert(err.response.data.message):alert(err.message)
        })
        .finally(()=>setLoading(false))
    }
    catch(error:any){
      error.response?
      alert(error.response.data.message):alert(error.message)
      // alert(error.message);
    }
  }, []);
  console.log(data);
  const router = useRouter();
  const { name } = router.query;
  const pageData: Object | any = data.find(
    (element: any) => element.name === name
  );
  console.log({ pageData });
  if (pageData && !loading) {
    return <AbacusTeamsComponent data={pageData} />;
  }
  if (!pageData && !loading) {
    window.location.pathname = "/page-not-found";
  }
  return null;
};

export default RegisterPage;
