import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { useState, useEffect } from "react";
import { pastesInterface } from "../utils/pastesInterface";
import ExistingPastes from "./ExistingPastes";

export function MainContent(): JSX.Element {
  //array of paste data 
  const [pastesArray, setPastesArray] = useState<pastesInterface[]>([]);

  useEffect(() => {
    const url = baseUrl + "/pastes";
    async function fetchPastes() {
      const response = await axios.get(url);
      console.log(response.data);
      setPastesArray(response.data);
    }
    fetchPastes();
  }, []);


  return (
  <div>
  <ExistingPastes data={pastesArray}/>
  </div>
  )
}
