import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function NewsApi(WrappedComponent) {
  const NewsApi =  async => {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    debugger
    useEffect(() => {
      axios
        .get('https://democracynepal.com/wp-json/wp/v2/posts')
        .then((response) => {
          console.log(response.data);
          setUsers(response.data);
        })
        .catch((err) => {
          setErrorMsg("Error retriving data");
        });
    }, []);
    return <WrappedComponent users={users} />;
    
    
  }
  return NewsApi();
}

export default NewsApi;