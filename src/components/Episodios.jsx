import React from "react";
import Header from "./Header";
import { Divider } from "@mui/material";

const Episodios = ({ episodios }) => {
  return (
    <>
      <Header titulo="Episodes" />
      <div style={{ padding: 10 }}>
        <div>
          {episodios.map((episodio) => (
            <div key={episodio.id}>
              <div>
                <div>
                  <h5>{episodio.name}</h5>
                  <p>
                    <b>Air date:</b> {episodio.air_date}
                  </p>
                  <p>
                    <b>Episode:</b> {episodio.episode}
                  </p>
                  <p>
                    <b>Characters:</b> {episodio.characters.length}
                  </p>
                </div>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Episodios;
