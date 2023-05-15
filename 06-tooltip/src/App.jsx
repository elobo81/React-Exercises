import TooltipText from "./tooltip/TooltipText"

function App() {
  

  return (
    <div className="App">
      <p><TooltipText tooltip={"Texto generado"}>Lorem Ipsum</TooltipText> dolor sit amet, consectetur adipisicing elit. Adipisci, nulla!</p>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum officia odit commodi illum alias omnis officiis sit modi eligendi nemo?</p>
      <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque aliquid quod laborum delectus et adipisci quibusdam <TooltipText tooltip={"Soy un tooltip"}>error</TooltipText> maiores cum vero.</p>  
    </div>
  )
}

export default App
