import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { SingleCommentElement } from "./SingleCommentElement";

interface ExistingCommentsProps {
  pasteId: number;
  toggle: boolean;
}

export interface commentInterface {
  id: number;
  comment: string;
  paste_id: number;
  creationdate: string;
}

export function ExistingComments(props: ExistingCommentsProps): JSX.Element {
  const [comments, setComments] = useState<commentInterface[]>([]);

  useEffect(() => {
    const url = baseUrl + `/pastes/${props.pasteId}/comments`;
    async function fetchComments() {
      const response = await axios.get(url);
      setComments(response.data);
    }
    fetchComments();
  }, [props.toggle, props.pasteId]);

  const commentJSXArray: JSX.Element[] = comments.map((comment) => (
    <SingleCommentElement key={comment.id} data={comment} />
  ));

  return <section>{commentJSXArray}</section>;
}
