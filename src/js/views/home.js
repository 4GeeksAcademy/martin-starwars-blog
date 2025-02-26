import React, { useEffect, useContext, useRef } from "react";
import "../../styles/home.css";
import CharacterCard from "../component/characterCard";
import PlanetsCard from "../component/planetsCard"; 
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const peopleScrollRef = useRef(null);
    const planetsScrollRef = useRef(null);

    
    useEffect(() => {
        actions.loadInitialData();
    }, []);
    
    
    const handlePeopleScroll = () => {
        const container = peopleScrollRef.current;
        if (container) {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
                actions.loadMorePeople();
            }
        }
    };


    const handlePlanetsScroll = () => {
        const container = planetsScrollRef.current;
        if (container) {
            if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 20) {
                actions.loadMorePlanets();
            }
        }
    };

    return store.isLoading ? <h2>Loading...</h2> : (
            <div className="text-center mt-5">
            <h1>Characters</h1>

            <div
                className="scroll-container"
                ref={peopleScrollRef}
                onScroll={handlePeopleScroll}
            >
                {store.people.map((person, index) => (
                    <CharacterCard
                        key={index}
                        name={person.name}
                        gender={person.gender}
                        hair_color={person.hair_color}
                        eye_color={person.eye_color}
                    />
                ))}
            </div>

            <h1>Planets</h1>

            
            <div
                className="scroll-container"
                ref={planetsScrollRef}
                onScroll={handlePlanetsScroll}
            >
                {store.planets.map((planet, index) => (
                    <PlanetsCard
                        key={index}
                        name={planet.name}
                        population={planet.population}
                        terrain={planet.terrain}
                       
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;

