import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DetailPlanet from "../component/detailPlanet";

const DetailPlanetView = () => {
    const { store, actions } = useContext(Context);
    const { planetId } = useParams();
    const [planet, setPlanet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const foundPlanet = store.planets.find(p => p.name === planetId);

        if (foundPlanet) {
            setPlanet(foundPlanet);
            setIsLoading(false);
        } else {
            actions.loadPlanetByName(planetId)
                .then(planetData => {
                    if (planetData) setPlanet(planetData);
                })
                .finally(() => setIsLoading(false));
        }
    }, [store.planets, planetId, actions]);

    if (isLoading) return <h2 className="text-center">Loading</h2>;
    if (!planet) return <h2 className="text-center">Planet not found</h2>;

    return (
        <div className="container mt-5">
            <DetailPlanet 
                name={planet.name}
                population={planet.population}
                climate={planet.climate}
                orbitalPeriod={planet.orbital_period}
                rotationPeriod={planet.rotation_period}
                diameter={planet.diameter}
            />
        </div>
    );
};

export default DetailPlanetView;


