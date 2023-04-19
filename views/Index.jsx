const React = require('react');
const Pokemon = require('../models/PokemonSchema')

function Index(props){
    const { Pokemon } = props;
    console.log(Pokemon)
    return(
        <>
        <h1>Index of Pokemon</h1>
        <nav>
            <a href='/pokemon/new'>Catch a Pokemon!</a>
        </nav>
        <ul>
            {Pokemon.map((poke) => {
                return(
                    <li key={poke._id}>
                    <a href={`/pokemon/${poke._id}`}>{poke.name}</a></li>
                )
                
            })}
        </ul>
        </>
    )
}

module.exports = Index;
