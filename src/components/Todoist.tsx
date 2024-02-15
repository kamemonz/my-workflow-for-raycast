import { Task, TodoistApi } from "@doist/todoist-api-typescript";
import { Detail, List, getPreferenceValues } from "@raycast/api";
import { useEffect, useState } from "react";

const { todist_api_token, todist_project_id } = getPreferenceValues();
const api = new TodoistApi(todist_api_token);

export default function Todoist() {
  const [projects, setProjects] = useState<Task[]>([]);
  useEffect(() => {
    api.getTasks({ projectId: todist_project_id }).then((res) => {
      setProjects(res);
    });
  }, []);

  if (projects.length === 0) {
    return <Detail markdown={"Loading..."} />;
  } else {
    console.log(projects);
    return (
      <List>
        {projects.map((project) => (
          <List.Item key={project.id} title={project.content} />
        ))}
      </List>
    );
  }
}
