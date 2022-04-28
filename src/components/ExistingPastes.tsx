import { pastesInterface } from "../utils/pastesInterface";
import { SinglePasteElement } from "./SinglePasteElement";

interface ExistingPastesProps {
  data: pastesInterface[];
  changeToggle: (arg: boolean) => void;
  toggle: boolean;
}

export default function ExistingPastes(
  props: ExistingPastesProps
): JSX.Element {
  const PastesArrayJSX = props.data.map((paste) => (
    <SinglePasteElement
      key={paste.id}
      data={paste}
      changeToggle={props.changeToggle}
      toggle={props.toggle}
    />
  ));

  return (
    <div>
      <h2 className="page--title">Recent Pastes</h2>
      <div className="recent-pastes">{PastesArrayJSX.splice(0, 10)}</div>
    </div>
  );
}
