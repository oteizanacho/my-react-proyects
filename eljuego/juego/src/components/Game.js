import React from "react"
import cartasData from "../cartasData"
import Mazo from "./Mazo"
import Player from "./Player"

export default function Game() {

    const [baraja, setBaraja] = React.useState(cartasData.data.cards)

    function drawCard() {
        //saco una carta random
        const index = Math.floor(Math.random() * baraja.length);
        //  console.log(baraja[index])
        newBaraja(index)
        //
        return baraja[index]
    }

    function newBaraja (index){
        //quito la carta de la baraja
        let array = baraja.filter((carta) => {
            return carta.id !== baraja[index].id
        })
        setBaraja(array)
        //seteo la nueva baraja sin la carta sacada
    }

    const [players, setPlayers] = React.useState([
        {
            mano: [],
            score: 0,
            id: 1
        }
        //estructura de jugador
    ])

    function startGame(){
        //crear las manos de todos los jugadores
        //
    }



    return (
        <div>
            <form>
                <h3>Cuantos jugadores son?</h3>
                <option></option>
            </form>
            <button onClick={drawCard}>Draw</button>
            <Mazo cards={baraja}/>
            <Player drawCard={drawCard}/>
        </div>
    )
}