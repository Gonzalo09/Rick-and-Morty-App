import React, { useEffect } from "react";
import Header from "./Header";
import { Divider } from "@mui/material";

const Ubicaciones = ({ ubicaciones }) => {
  useEffect(() => {
    document.title = "Rick and Morty - Locations";
  }, []);
  return (
    <>
      <Header titulo="Locations" />
      <div style={{ padding: 10 }}>
        <div>
          {ubicaciones.map((ubicacion) => (
            <div key={ubicacion.id}>
              <div>
                <div>
                  <h5>{ubicacion.name}</h5>
                  <p>
                    <b>Type:</b> {ubicacion.type}
                  </p>
                  <p>
                    <b>Dimension:</b> {ubicacion.dimension}
                  </p>
                  <p>
                    <b>Residents:</b> {ubicacion.residents.length}
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

export default Ubicaciones;
