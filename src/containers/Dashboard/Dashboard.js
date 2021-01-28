import React,{useState} from 'react';
import Sales from '../../components/Sales/Sales'

const Dasboard = (props) => {
    const [salesProductsState, salesProductsSetState] = useState({});
    let products = [];
    return(
        <>
            <h1>Dashboard</h1>            
            <Sales salesProducts={products}/>
            <Sales salesProducts={products}/>
            <Sales salesProducts={products}/>
            <Sales salesProducts={products}/>
            <Sales salesProducts={products}/>
        </>
    )
}
export default Dasboard;