import Navbar from '../../Components/Navbar/Navbar/Navbar';
import './Home Page.css'
import Header from '../../Components/Header/Header';
import Featured from '../../Components/Featured/Featured';
import PropertyList from '../../Components/PropertyList/PropertyList';
import FeaturedProperty from '../../Components/FeaturedProperty/FeaturedProperty';
import MailList from '../../Components/MailList/MailList';
import Footer from '../../Components/Footer/Footer';
function Home()
{
    return (
        <>
    <div>
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
        <Featured/>
    <h1 className='Btitle'>Browse by property</h1>
    <PropertyList/>
    <h1>Hotels guets loves</h1>
    <FeaturedProperty/>
    <MailList/>
    <Footer/>
    </div>
     
    </div>
   
    </>
    );
}

export default Home