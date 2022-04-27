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

  return (
    <div>
      <h2>Existing Pastes</h2>
      {PastesArrayJSX.splice(0, 10)}
    </div>
  );
}
