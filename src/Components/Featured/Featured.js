import './Featured.css'

const Featured =()=>
{
  return (
  <div className='featured'>
    <div className='featuredItem'>
    <img src='/images/travela1.png'/>
    <div className='featuredTitle'>
      <h1>Dubai</h1>
      <h2>120 properties</h2>

    </div>

    </div>
    <div className='featuredItem'>
    <img src='/images/travela2.png'/>
    <div className='featuredTitle'>
      <h1>Austin</h1>
      <h2>423 properties</h2>

    </div>

    </div>
    <div className='featuredItem'>
    <img src='/images/travela3.png'/>
    <div className='featuredTitle'>
      <h1>Berlin</h1>
      <h2>534 properties</h2>

    </div>

    </div>
    <div className='featuredItem'>
    <img src='/images/travela4.png'/>
    <div className='featuredTitle'>
      <h1>New York</h1>
      <h2>323 properties</h2>

    </div>

    </div>
   
  </div>);
}
export default Featured 