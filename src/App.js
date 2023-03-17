import { Tooltip } from "react-tooltip";

function App() {
  return (
    <>
    <Tooltip content='Tooltip Content' tipPointerPosition='Start' target='#target'>
      
      </Tooltip>
      <h3 style={{TextDecoder:"underline"}} id='target'>Hover over me</h3>
    </>
  );
}

export default App;
