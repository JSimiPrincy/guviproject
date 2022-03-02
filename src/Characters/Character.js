import { useState } from "react";
import './Character.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

function Character() {
    const [characters, setCharacters] = useState(null);
    const [myOptions, setMyOptions] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("https://www.anapioficeandfire.com/api/characters?pageSize=12");
        setCharacters(response.data);
        for (var i = 0; i < response.data.length; i++) {
            myOptions.push(response.data[i].name)
        }
        setMyOptions(myOptions);
    };
    return (
        <div className="Characters">
            <div className="fetchdata" onClick={fetchData}>
                Get Characters
            </div>
            <div className="search" align="center">
               <Autocomplete
               style={{ width: 500 }}
               freeSolo
               autoComplete
               autoHighlight
               options={myOptions}
               renderInput={(params) => (
                  <TextField {...params}
                  onChange={fetchData}
                  variant="outlined"
                  label="Search Box"
                  />
                )}
                />
            </div>
            <br />
            <div className="characters">
                {characters && characters.map((character, index) => {
                    return (
                        <div className="character" key={index}>
                            <h4><i>Character-{index+1}</i></h4>
                            <div className="details">
                                <p>Name: {character.name}<br />
                                Gender: {character.gender}<br />
                                Father: {character.father}<br />
                                Culture: {character.culture}<br />
                                Born: {character.born}<br />
                                Died: {character.died}<br />
                                Titles: {character.titles}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Character;