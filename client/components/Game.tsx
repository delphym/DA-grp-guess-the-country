import GuessForm from "./GuessForm"
// import Flag from './Flag'


function Game() {
  const gameStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '600px',
    margin: '0 auto'
  };

  return (
    <div style={gameStyle}>
      <div>This is a GAME area component</div>
      <img  src="https://picsum.photos/200/300" alt="game background" />
      <GuessForm />
    </div>
  );
}

// function Game() {
//   return (
//     <>
//       <div>This is a GAME area component</div>
//       <GuessForm/>
//     </>
//   )
// }

export default Game
