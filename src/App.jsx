import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Showcase from "./components/Showcase";
import Loading from "./components/Loading";
import Movies from "./components/Movies";

const App = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      fetch("https://swapi.dev/api/films").then((res) => res.json()),
  });

  console.log(data?.results);

  return (
    <>
      {isLoading && <Loading />}
      {error && <h4>An error has occurred: {error.message}</h4>}
      <Showcase />
      <Movies data={data} />
    </>
  );
};

export default App;
