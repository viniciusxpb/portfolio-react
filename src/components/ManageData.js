import { useState } from "react";

const ManageData = () =>{

    const [number, setNumber] = useState(10);

    return (
        <div>

            <div>
                <p>Valor: {number}</p>
                <button onClick={()=> setNumber(25)}>Mudar o State</button>
            </div>

        </div>
    )
}

export default ManageData