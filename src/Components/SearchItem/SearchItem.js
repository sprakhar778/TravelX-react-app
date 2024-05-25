import './SearchItem.css';
import { useNavigate } from 'react-router-dom';
const SearchItem=()=>
{
    const navigate=useNavigate();
    return(
    <div className='searchItem'>
     <img src='/images/travela1.png'/>
     <div className='siDesc'>
        <h1 className='siTitle' onClick={()=> navigate('/hotel')}>Emerald Place Hotel</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siTaxiOpt'>Free airport taxi</span>
        <span className='siSubtitle'>Studio apartment with air conditioning</span>
        <span className='siFeatures'>Entire Studio. 1 bathroom .21m<sup>2</sup> 1 full bedroom</span>
        <span className='siCancelOpt'>Free Cancellation</span>
        <span className='siCancelSub'>You can cancel later so lock in this great price today!</span>

     </div>
     <div className='siDetail'>
        <div className='siRating'>
            <span >Excellent</span>
            <button>9.5</button>
        </div>
        <div className='siDetailText'>
            <span className='siPrice'>123$</span>
            <span className='siTaxOpt'>Include tax and fees</span>
            <button className='siCheckBtn' onClick={()=> navigate('/hotel')}>See availability</button>
        </div>
     </div>
    </div>
    );
}
export default SearchItem