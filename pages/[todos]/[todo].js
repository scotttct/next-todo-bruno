import { useRouter } from 'next/router'


const Todo = () => {
    const router = useRouter();
    return (
        <>
            <div className="container mb-3 text-center">
                <h2>{router.query.todos}</h2>
                <ol className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-start ">
                        <input className='mt-2'  type="checkbox"></input>
                        <div className='ms-2 me-auto'> {router.query.name}</div>
                        <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                    
                    </li>
                </ol>
            </div> 
        </>
    );
}

export default Todo;