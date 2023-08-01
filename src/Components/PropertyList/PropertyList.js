import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pItem">
        <img src="/images/travelb1.png" />
        <div className="pTitle">
          <h1>Hotel</h1>
          <h2>150 hotels</h2>
        </div>
      </div>
      <div className='pItem'>
            <img src='/images/travelb2.png'/>
            <div className='pTitle'>
                <h1>Apartment</h1>
                <h2>223 appartments</h2>

            </div>

            </div>
            <div className='pItem'>
            <img src='/images/travelb3.png'/>
            <div className='pTitle'>
                <h1>Resort</h1>
                <h2>240 resorts</h2>

            </div>

            </div>
            <div className='pItem'>
            <img src='/images/travelb4.png'/>
            <div className='pTitle'>
                <h1>Villas</h1>
                <h2>324 villas</h2>

            </div>

            </div>
            <div className='pItem'>
            <img src='/images/travelb5.png'/>
            <div className='pTitle'>
                <h1>Cabin</h1>
                <h2>186 cabins</h2>

            </div>

            </div>

    </div>
  )
}

export default PropertyList;
