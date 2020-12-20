import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }

  axiosInstance(opts)
    .then((data) => {
      setState({
        ...state,
        loading: false,
        data,
      });
    })
    .catch((error) => {
      setState({ ...state, loading: false, error });
    });
  }, [trigger]);

  return { ...state, refetch };
};

const Axios = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "Loading" : "Done"}</h2>
      <button onClick={refetch}>Button</button>
    </div>
  );
};

export default Axios;
