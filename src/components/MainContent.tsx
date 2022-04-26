import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { useState, useEffect } from "react";
import { pastesInterface } from "../utils/pastesInterface";

export function MainContent(): JSX.Element {
  const [pastes, setPastes] = useState<pastesInterface[]>([]);

  useEffect(() => {
    const url = baseUrl + "/pastes";
    async function fetchPastes() {
      const response = await axios.get(url);
      console.log(response.data);
      setPastes(response.data);
    }
    fetchPastes();
  }, []);

  return <div></div>;
}
