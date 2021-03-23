// import { navigate } from '@reach/router';
import { useState } from 'react';
import Axios from 'axios';

const DeleteButtonComponent = ({productID, successCallback}) => {
    const [product, setProducts] = useState(false);

    const handleDestroyProduct = (id) => {
        Axios.delete(`http://localhost:8000/api/products/${id}`)
            // .then(res => setProducts(res.data.results))
            // .then(res => navigate('/'))
            .then(res => successCallback())
            .catch(err => console.log(err))
    }

    return(
        <button 
            className="btn btn-danger mx-2"
            onClick={() => {handleDestroyProduct(productID)}}
            >Delete
        </button>
    )

}

export default DeleteButtonComponent;