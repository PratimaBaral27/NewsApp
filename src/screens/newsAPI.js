import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function NewsApi(WrappedComponent) {
  function NewsApi() {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
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
  return NewsApi;
}

export default NewsApi;