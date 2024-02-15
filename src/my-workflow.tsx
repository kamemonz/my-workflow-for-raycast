import { Detail } from "@raycast/api";
import Todoist from "./components/Todoist";

export default function MyWorkflow() {
  return (
    <>
      <Detail markdown={"# Hello World"} />
      <Todoist />
    </>
  );
}
