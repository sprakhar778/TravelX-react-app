import './MailList.css';

const MailList =()=>
{
    return(
        <div className='mail'>
        <h1 className='title'>Save time.Save Money</h1>
        <span className='titleInfo'>SignUp and we will send best deals</span>
        <div className='MailInputContainer'>
            <input type='text' placeholder='Enter your mail'></input>
            <button>Subscribe</button>

        </div>
        </div>
    );
}

export default MailList