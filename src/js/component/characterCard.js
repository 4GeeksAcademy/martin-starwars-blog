import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const CharacterCard = ({ name, gender, hair_color, eye_color }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    
    const isFavorite = Array.isArray(store.favorites) && store.favorites.includes(name);

    return (
        <div className="card" style={{ width: "18rem", marginRight: "20px" }}> 
            <div className="card-img-top" style={{
                width: "100%", 
                height: "200px", 
                backgroundColor: "#D3D3D3" 
            }}></div>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eye Color: {eye_color}</p>
                
                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-outline-primary" 
                        onClick={() => navigate(`/people/${name}`)}
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

export default CharacterCard;








