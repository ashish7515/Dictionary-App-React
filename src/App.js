import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions"


function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        setMeanings(data.data);
    } catch(error){
      console.log(error);
    }
  }
  /* console.log(meanings);*/
  useEffect(() => {
    dictionaryApi();
  }, [word])
  

  return (
    <div className="App" style={{height:'100vh',backgroundColor:'#fff',color:'#282c34'}}>
      <Container maxWidth="md" style={{display:"flex", flexDirection:"column", height:'100vh',paddingTop:"2vh"}}>
      <Header 
        word={word} 
        setWord={setWord}
      /> 

      {meanings && (<Definitions word = {word} meanings={meanings}/>)}
      </Container>
    </div>
  );
}

export default App;
