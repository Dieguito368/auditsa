import { ChangeEvent, useState } from "react";
import { channels } from "./data/channels";

function App() {
    const [ selectedLocality , setSelectedLocality ] = useState("");
    const [ localityChannels, setLocalityChannels ] = useState([]);

    const handleChangeLocality = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocality (e.target.value);
        setLocalityChannels(channels[selectedLocality]);
    }

    console.log(localityChannels);

    return (
        <div className="w-1/2 mx-auto mt-15">
            <div>
                <label 
                    htmlFor="locality"
                    className="block"
                >Localidad:</label>
                <select 
                    name="locality" 
                    id="locality"
                    className="cursor-pointer outline-0"
                    onChange={ handleChangeLocality }
                    autoComplete="locality"
                    value={ selectedLocality }
                >
                    <option value="" disabled >--- Selecciona una localidad ---</option>
                    <option value="CDMX3_52">CDMX 3.52</option>
                    <option value="CDMX3_53">CDMX 3.53</option>
                    <option value="CDMX3_54">CDMX 3.54</option>
                    <option value="CDMX2_B">CDMX2 B</option>
                    <option value="ZAPOPAN">ZAPOPAN</option>
                    <option value="GUADALAJARA">GUADALAJARA</option>
                    <option value="MONTERREY">MONTERREY</option>
                    <option value="CDMX2_B_RESPALDO">CDMX2 B RESPALDO</option>
                </select>
            </div>

                {
                    localityChannels &&
                        <div>
                            {/* { localityChannels[0].name } */}
                        </div>
                }
        </div>
    )
}

export default App;