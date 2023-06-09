import Link from "@mui/material/Link";

export default function Personajes(props) {
  const { personajes } = props;

  return (
    <div className="characters App App-header">
      <h1>Personajes</h1>
      <Link href="/" underline="hover" color="darkseagreen">
        Volver
      </Link>
      <div className="container-characters">
        {personajes.map((personajes, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={personajes.image} alt={personajes.name} />
            </div>
            <div>
              <h3>{personajes.name}</h3>
              <h6>
                {personajes.status === "Alive" ? (
                  <>
                    <span className="alive"></span>
                    {personajes.status}
                  </>
                ) : (
                  <>
                    <span className="dead"></span>
                    {personajes.status}
                  </>
                )}
              </h6>
              <p>
                <span className="text-gray">Episodios:</span>
                <span> {personajes.episode.length}</span>
              </p>
              <p>
                <span className="text-gray">Especie:</span>
                <span> {personajes.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/" underline="hover" color="darkseagreen">
        Volver
      </Link>
    </div>
  );
}
