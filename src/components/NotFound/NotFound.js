import img404 from '../assets/images/notfound.jpg'
import {useLocation} from 'react-router-dom';

const Notfound = (props) => {
    
    let location = useLocation();

    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:'8rem'}}> 404 Not Found</h1>
            <h4>{location.pathname}</h4>
            {/* <img src={img404} alt='Not Found' style={{height:'100vh',width:'100vw'}}/>  */}

        </div>
    )
}
export default Notfound;