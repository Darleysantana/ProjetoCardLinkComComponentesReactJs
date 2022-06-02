import Item from "./components/Item";
import Card from "./components/Card";

const App = () => 
{
return(
  <>
    <h1>Meu primeiro programa com React</h1>
    <ul>
      <Item>
        Item 1
      </Item>
      <Item>
        Item 2
      </Item>
    </ul>

    <Card />
  </>
)
}

export default App;