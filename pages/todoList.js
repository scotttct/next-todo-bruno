import { Link } from 'next/link'

const todos = [
    {id: 1, t:"Work", name:"Work on todo todos.json file"},
    {id: 2, t:"Home", name:"Pick up some food for dinner at Publix"},
    {id: 3, t:"Home", name:"Pick up some boooze for the game at Publix"},
]

const Todo = () => {
    const router = useRouter();
    return (
        <>
            <div className="container mb-3 text-center">
                <h2>{router.query.todos}</h2>
                
                    {todos.map(e => ( 
                        <Link key={e.id} as={`/${e.t}/${e.name}`} href="/[todos]/[todo]">
                        <a>Navigate to {e.t} - {e.name}</a>
                        
                        </Link> 
                        ))}
                    {/* // <li key={id} className="list-group-item d-flex justify-content-between align-items-start ">
                    //     <input className='mt-2'  type="checkbox"></input>
                    //     <div className='ms-2 me-auto'>{router.query.t} - {router.query.name}</div>
                    //     <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                    
                    // </li> */}
                   
               
            </div> 
        </>
    );
}

export default Todo;