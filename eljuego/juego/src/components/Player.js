import React from "react";

export default function Player(props) {
  const [player, setPlayer] = React.useState([]);

  React.useEffect(() => {
    let carta = props.drawCard();
    
    setPlayer(prevState => [...prevState, carta])
    
  }, []);

  console.log(player);

  return (
    <div>
      <h1>soy un jugador</h1>
    </div>
  );
}
