import Button from "../Button/index";
import { useState } from "react";

const Card = () => 
{

    const [value, setvalue] = useState (0)

    function Adicionar ()
    {
        setvalue(value + 1)
    }

    function Remover ()
    {
        setvalue(value - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">

                <Button  
                className = "btn btn-success"
                onClick = {Adicionar}
                >
                    Adicionar
                </Button>
                



                <Button  
                className = "btn btn-danger"
                onClick = {Remover}
                >
                    Remover
                </Button>

                <p>{value}</p>
            </div>
        </div>
    )
}

export default Card;