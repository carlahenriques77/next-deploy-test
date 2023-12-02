import { useEffect, useState } from "react";

const useDataFetching = (urlToFetch) => {
  const [completeDataJSON, setCompleteDataJSON] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRequest = await fetch(urlToFetch);

        if (dataRequest.ok) {
          const responseJSON = await dataRequest.json();

          setCompleteDataJSON(responseJSON);
        } else {
          setHasError("Error fetching data");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [urlToFetch]);

  return { completeDataJSON };
};

export default useDataFetching;
