import { useEffect, useState } from "react";

import "./ProjectFormStyle.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    // Pegando direto do 'Banco de dados'
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headres: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories = data;
      })
      .catch((erro) => console.log(erro));
  }, []);
  // Pegando direto do 'Banco de dados'

  return (
    <form className="form">
      <Input
        type="text"
        txt="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      ></Input>

      <Input
        type="number"
        txt="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
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
