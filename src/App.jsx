// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Showcase from "./components/Showcase";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://swapi.dev/api/films").then((res) => res.json()),
  });

  console.log(data);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  return <Showcase />;
};

export default App;
