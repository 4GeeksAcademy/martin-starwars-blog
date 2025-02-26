import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetsCard = ({ name, population, terrain }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    
    const isFavorite = Array.isArray(store.favorites) && store.favorites.includes(name);

    return (
        <div className="card" style={{ width: "18rem", marginRight: "20px", position: "relative" }}> 
            <div className="card-img-top" style={{
                width: "100%", 
                height: "200px", 
                backgroundColor: "#D3D3D3" 
            }}></div>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Terrain: {terrain}</p>

                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={() => navigate(`/planet/${name}`)}
                    >
                        Learn More
                    </button>

                    <button 
                        className={`btn ${isFavorite ? 'btn-danger' : 'btn-primary'}`}  
                        onClick={() => {
                            
                            actions.addFavorite(name);
                            
                        }}
                    >
                        <i className={`fa-solid fa-star ${isFavorite ? 'text-warning' : ''}`}></i>  
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanetsCard;




