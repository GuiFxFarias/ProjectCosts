import { json, useNavigate } from "react-router-dom"; 

import ProjectForm from "../project/ProjectForm";
import "./NewProjectStyle.css";

function NewProject() {
  const history = useNavigate(); 

  function creatPost(project){
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project) 
    })
    .then(resp => resp.json())
    .then(data => {console.log(data)})
    .catch(erro => console.log(erro))
  }

  return (
    <div className="newProjectContainer">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto"></ProjectForm>
    </div>
  );
}

export default NewProject;
