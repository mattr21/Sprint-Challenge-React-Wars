import React from 'react';
import './StarWars.css';
import Films from './Films'

const Character = props => {
    return (
        <div className="character-card">
            <div className="character-stats">
                <p className="name"><strong>{props.character.name}</strong></p>
                <p><strong>Birth year: </strong>{props.character.birth_year}</p>
                <p><strong>Eye color: </strong>{props.character.eye_color}</p>
                <p><strong>Gender: </strong>{props.character.gender}</p>
                <p><strong>Hair color: </strong>{props.character.hair_color}</p>
                <p><strong>Height: </strong>{props.character.height}</p>
                <p><strong>Mass: </strong>{props.character.mass}</p>
                <p><strong>Skin color: </strong>{props.character.skin_color}</p>
            </div>

           {props.character.films.map(filmFromMap => (
               <Films film={filmFromMap}/>
            ))}
        </div>
    );
}

export default Character;