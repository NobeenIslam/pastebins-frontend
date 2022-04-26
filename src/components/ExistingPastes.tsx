import { pastesInterface } from "../utils/pastesInterface";
import { SinglePasteElement } from "./SinglePasteElement";

interface ExistingPastesProps {
  data: pastesInterface[];
}

export default function ExistingPastes(
  props: ExistingPastesProps
): JSX.Element {
  const PastesArrayJSX = props.data.map((paste) => (
    <SinglePasteElement key={paste.id} data={paste} />
  ));

  return<div>
      <p>Existing Pastes</p>
      {PastesArrayJSX}
    </div>
}
