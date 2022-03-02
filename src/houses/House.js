import { useState } from "react";
import './House.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

function Houses() {
    const [houses, setHouses] = useState(null);
    const [myOptions, setMyOptions] = useState([]);
    const fetchData = async () => {
        const response = await axios.get("https://www.anapioficeandfire.com/api/houses?pageSize=12");
        setHouses(response.data);
        for (var i = 0; i < response.data.length; i++) {
            myOptions.push(response.data[i].name)
        }
        setMyOptions(myOptions);
    };
    return (
        <div className="Houses">
            <div className="fetchdata" onClick={fetchData}>
                Get Houses
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
            <div className="houses">
                {houses && houses.map((house, index) => {
                    return (
                        <div className="book" key={index}>
                            <h4><i>Book-{index+1}</i></h4>
                            <div className="details">
                            <p>Name: {house.name}<br />
                                Region: {house.region}<br />
                                CoatOfArms: {house.coatOfArms}<br />
                                Words: {house.words}<br />
                                Titles: {house.titles}<br />
                                Founder: {house.founder}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Houses;