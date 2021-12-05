import React , {useState , useEffect} from 'react'
import './App.css'
import axios from 'axios';


const App2 = () => {

    const [quote, setQuote] = useState(" ");

    const fetchQuote = async ()=>{

        const res = await axios('https://api.quotable.io/random');

        setQuote(res.data.content)

    }

    useEffect( ()=>{ 

        fetchQuote();

    } , [])


    return (
        <div className="appContainer" >
            <div className="innerContainer">
                <div className="outerContainer">
                        
                        <div className="quoteDiv">
                                <p>
                                    {
                                        quote
                                    }
                                </p> 
                        </div>


                         <div className="btnDiv" >

                                <button onClick={fetchQuote} >
                                    Another One
                                </button>

                        </div>

                </div>
            </div>
        </div>
    )
}

export default App2
