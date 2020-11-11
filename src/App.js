// const { Red1 } = require("./Red1");
// const { default: Red2 } = require("./Red2");

const { default: RedQueen } = require("./Red2");


function App() {
  return (
    <div className="App">
{/* <Red2></Red2> */}
{/* <Red1></Red1> */}
<RedQueen></RedQueen>
    </div>
  );
}

export default App;
