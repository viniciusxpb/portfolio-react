import { useState } from "react";

const ListRender = () =>{

    const [list] = useState(['Matheus','Pedro','Josias',"Maria"]);

    const [users,setUsers] = useState(
        [
            {id: 1, name: 'Matheus',age: 31},
            {id: 2, name: 'Pedro',age: 28},
            {id: 3, name: 'Josias',age: 44},
            {id: 4, name: 'Maria',age: 15},
        ]
    );

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });

        console.log(users);

    }

    return (
        <div>
            <ul>
                {users.map((item,i) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <button onClick={()=> deleteRandom()}>Delete User</button>
        </div>
    )
}

export default ListRender