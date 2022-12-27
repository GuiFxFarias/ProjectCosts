import { useEffect, useState } from "react";

import "./ProjectFormStyle.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    // Pegando direto do 'Banco de dados'
    fetch("http://localhost:5000/categories ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((erro) => console.log(erro));
  }, []);
  // Pegando direto do 'Banco de dados'

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        txt="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
      ></Input>

      <Input
        type="number"
        txt="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
      ></Input>

      <Select
        name="categoryId"
        txt="Selecione uma categoria"
        options={categories}
      ></Select>

      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
