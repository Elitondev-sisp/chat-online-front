import { GetServerSideProps } from "next";
// Utilizando typescript para tipar as rotinas.
type Repo = {
  name: string;
  description: String;
};

type RepositoriesProps = {
  repos: Repo[];
};

// Rotina principal para listar as informações já pegas com o node.
export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <div>
      <h1>Repositorios</h1>
      <ul>
        {repos.map((repo) => (
          <li>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Utiliza o getServerSideProps quando você quer que o node execute algo antes de buildar e devolver o html ao navegador do cliente.
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/diego3g/repos");
  const data = await response.json();

  return {
    props: {
      repos: data,
    },
  };
};
