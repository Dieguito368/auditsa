import { ChangeEvent, useState } from "react";
import { Channel, channels } from "./data/channels";
import 'animate.css';

function App() {
    const [ selectedLocality , setSelectedLocality ] = useState("");
    const [ localityChannels, setLocalityChannels ] = useState<Channel[]>([]);

    const handleChangeLocality = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocality (e.target.value);
        setLocalityChannels(channels[e.target.value]);
    }

    const handleClickOK = () => {
        const updatedLocalityChannels = localityChannels.filter(channel => channel.ID !== localityChannels[0].ID);

        setLocalityChannels(updatedLocalityChannels);
    }

    const handleClickJump = () => {
        const currentChannel = localityChannels[0];
        
        const newArray = localityChannels.filter(channel => channel.ID !== currentChannel.ID);

        setLocalityChannels([ ...newArray,  currentChannel]);
    };

    const copyToClipboard = (ID: string) => {
        navigator.clipboard.writeText(ID)
            .then(() => {
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
            });
    };

    const copyRowToClipboard = (channel: Channel) => {
        const rowText = `${channel.server}\t${channel.locality}\t${channel.ID}\t${channel.season}`;
        navigator.clipboard.writeText(rowText)
            .then(() => {
                console.log("Copiado al portapapeles:", rowText);
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
            });
    };

    return (
        <div className="w-full px-10 py-5 md:w-3/4 mx-auto">
            <div>
                <label 
                    htmlFor="locality"
                    className="block"
                >Localidad:</label>

                <select 
                    name="locality" 
                    id="locality"
                    className="border  w-full p-2 cursor-pointer outline-0 mt-2"
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
                localityChannels.length > 0 &&
                    <div className="mt-5">
                        <p>{ channels[selectedLocality].length - localityChannels.length } / { channels[selectedLocality].length }</p>

                        <div className="w-full h-6 rounded-full border">
                            <div className={ `w-[${channels[selectedLocality].length - localityChannels.length * 100 / channels[selectedLocality].length}%] bg-black h-full rounded-full` }></div>
                        </div>

                        <table className="table-auto border border-black border-collapse w-full mt-5">
                            <thead className="bg-[#FF99FF]">
                                <tr className="text-sm">
                                    <th className="border border-black px-2 py-2">SERVIDOR</th>
                                    <th className="border border-black px-2 py-2">LOCALIDAD</th>
                                    <th className="border border-black px-2 py-2">ID</th>
                                    <th className="border border-black px-2 py-2">ESTACIÓN/SIGLAS</th>
                                    <th className="border border-black px-2 py-2">NOMBRE</th>
                                    <th className="border border-black px-2 py-2">ACCIONES</th>
                                </tr>
                            </thead>

                            <tbody className="bg-[#FFFF00]">
                                <tr className="text-sm text-center">
                                    <td className="border border-black px-2 py-1">{ localityChannels[0].server }</td>
                                    <td className="border border-black px-2 py-1">{ localityChannels[0].locality }</td>
                                    <td 
                                        className="border border-black px-2 py-1 cursor-pointer"
                                        onClick={ () => copyToClipboard(localityChannels[0].ID.toString()) }
                                    >{ localityChannels[0].ID }</td>
                                    <td className="border border-black px-2 py-1">{ localityChannels[0].season }</td>
                                    <td className="border border-black px-2 py-1">{ localityChannels[0].name }</td>
                                    <td>
                                        <button
                                            onClick={ () => copyRowToClipboard(localityChannels[0]) }
                                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-2 py-1 rounded"
                                        >
                                            Drive
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="flex justify-center gap-15 mt-5">
                            <button 
                                type="button" 
                                onClick={ handleClickJump }
                                className="bg-gray-600 text-white w-40 py-1 cursor-pointer hover:bg-gray-700 rounded transition-colors"
                            >Saltar</button>

                            <button 
                                type="button" 
                                onClick={ handleClickOK }
                                className="bg-green-600 text-white w-40 py-1 cursor-pointer hover:bg-green-700 rounded transition-colors"
                            >Ok</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default App;