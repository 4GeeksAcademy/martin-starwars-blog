import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DetailCharacter from "../component/detailCharacter";

const DetailCharacterView = () => {
    const { store, actions } = useContext(Context);
    const { peopleId } = useParams();
    const [people, setPeople] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const foundPeople = store.people.find(p => p.name === peopleId);

        if (foundPeople) {
            setPeople(foundPeople);
            setIsLoading(false);
        } else {
            actions.loadCharacterByName(peopleId)
                .then(character => {
                    if (character) setPeople(character);
                })
                .finally(() => setIsLoading(false));
        }
    }, [store.people, peopleId, actions]);

    if (isLoading) return <h2 className="text-center">Loading</h2>;
    if (!people) return <h2 className="text-center">Character not found</h2>;

    return (
        <div className="container mt-5">
            <DetailCharacter 
                name={people.name}
                birthYear={people.birth_year}
                gender={people.gender}
                height={people.height}
                skinColor={people.skin_color}
                eyeColor={people.eye_color}
            />
        </div>
    );
};

export default DetailCharacterView;
