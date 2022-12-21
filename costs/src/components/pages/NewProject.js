import ProjectForm from "../project/ProjectForm"
import "./NewProjectStyle.css"

function NewProject (){
    return(
        <div className="newProjectContainer">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm></ProjectForm>
        </div>
    )
}

export default NewProject