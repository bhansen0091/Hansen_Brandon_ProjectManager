import { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';

const Main = props => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const handleDestroyProduct = (id) => {
        Axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        products ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p,i) => {
                            return <tr key={i}>
                                    <td>
                                        <Link 
                                            to={`/show/${p._id}`}
                                            >{p.title}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link className="btn btn-warning" to={`/edit/${p._id}`}
                                            >Edit
                                        </Link>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => {handleDestroyProduct(p._id)}}
                                            >Delete
                                        </button>
                                    </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading...</h2>
    )
}

export default Main;