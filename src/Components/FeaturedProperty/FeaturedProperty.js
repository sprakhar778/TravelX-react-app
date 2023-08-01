import './FeaturedProperty.css';

const FeaturedProperty =()=>
{
  return(
    <div className='fp'>
        <div className='fpItem'>
            <img src='/images/travelc1.png'/>
           <span className='fName'>Imperial Palace</span>
           <span className='fCity'>New York</span>
           <span className='fPrice'>Starting from 500$</span>
           <div className='fRating'>
            <button>8.9</button>
            <span>Good</span>
           </div>
        </div>
        <div className='fpItem'>
            <img src='/images/travelc2.png'/>
           <span className='fName'>Imperial Palace</span>
           <span className='fCity'>New York</span>
           <span className='fPrice'>Starting from 500$</span>
           <div className='fRating'>
            <button>9.6</button>
            <span>Excllent</span>
           </div>
        </div>
        <div className='fpItem'>
            <img src='/images/travelc3.png'/>
           <span className='fName'>Imperial Palace</span>
           <span className='fCity'>New York</span>
           <span className='fPrice'>Starting from 500$</span>
           <div className='fRating'>
            <button>9.2</button>
            <span>Good</span>
           </div>
        </div>
        <div className='fpItem'>
            <img src='/images/travelc4.png'/>
           <span className='fName'>Imperial Palace</span>
           <span className='fCity'>New York</span>
           <span className='fPrice'>Starting from 500$</span>
           <div className='fRating'>
            <button>9.5</button>
            <span>Best</span>
           </div>
        </div>
       
        

    </div>
  );
}

export default FeaturedProperty