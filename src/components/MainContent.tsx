import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { useState, useEffect } from "react";
import { pastesInterface } from "../utils/pastesInterface";
import ExistingPastes from "./ExistingPastes";
import { CreatePasteForm } from "./CreatePasteForm";

export function MainContent(): JSX.Element {
  //array of paste data
  const [pastesArray, setPastesArray] = useState<pastesInterface[]>([]);
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    const url = baseUrl + "/pastes";
    async function fetchPastes() {
      const response = await axios.get(url);
      setPastesArray(response.data);
    }
    fetchPastes();
  }, [toggle]);

  return (
    <div className="CenterBlocks">
      <CreatePasteForm changeToggle={setToggle} toggle={toggle} />
      <br />
      <ExistingPastes data={pastesArray} changeToggle={setToggle} toggle={toggle} />
    </div>
  );
}
