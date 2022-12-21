import "./HomeStyle.css";
import savings from "../img/savings.svg";
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className="homeContainer">
      <h1>
        Bem-Vindo ao <span>Costs</span>
      </h1>
      <p>Começe a gerenciar seus projetos agora mesmo</p>
      <LinkButton to="/newproject" txt="Criar Projeto"></LinkButton>
      <img src={savings} alt="Costs" />
    </section>
  );
}

export default Home;
