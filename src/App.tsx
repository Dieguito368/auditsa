import { useEffect, useState } from "react";
import UserModal from "./components/UserModal";
import { socket } from './utils/socket'; 
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Channel, channels } from "./data/channels";
import 'primeicons/primeicons.css';
import 'animate.css';

function App() {
    const [ selectedUser, setSelectedUser ] = useState<string>("");
    const [ isInvited, setIsInvited ] = useState(false);
    const [ isVisibleModal, setIsVisibleModal ] = useState(true);
    const [ selectedLocality , setSelectedLocality ] = useState("");
    const [ localityChannels, setLocalityChannels ] = useState<Channel[]>([]);
    const [ occupied, setOccupied ] = useState<string[]>([]);
    const [ userList, setUserList ] = useState<{ name: string, locality: string | null }[]>([]);

    useEffect(() => {
        socket.on("occupiedLocalities", (data: string[]) => {
            setOccupied(data);
        });

        socket.on("usersWithLocality", (data) => {
            setUserList(data);
        });

        socket.emit("getUsersWithLocality");

        return () => {
            socket.off("usersWithLocality");
        };
    }, [ selectedUser ]);

    const handleChangeLocality = (e: DropdownChangeEvent) => {
        setSelectedLocality (e.target.value);
        setLocalityChannels(channels[e.target.value]);

        socket.emit("selectLocality", e.target.value);
    }

    const handleClickOK = () => {
        const updatedLocalityChannels = localityChannels.filter(channel => channel.ID !== localityChannels[0].ID);

        setLocalityChannels(updatedLocalityChannels);

        if(localityChannels.length == 1) {
            socket.emit("releaseLocality", selectedLocality);

            setSelectedLocality("");
        }
    }

    const handleClickJump = () => {
        const currentChannel = localityChannels[0];
        
        const newArray = localityChannels.filter(channel => channel.ID !== currentChannel.ID);

        setLocalityChannels([ ...newArray,  currentChannel ]);
    };

    const copyToClipboard = (ID: string) => {
        navigator.clipboard.writeText(ID)
            .then(() => {
                alert("Copiado");
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
            });
    };

    const copyRowToClipboard = (channel: Channel) => {
        const rowText = `${channel.server}\t${channel.locality}\t${channel.ID}\t${channel.season}`;
        navigator.clipboard.writeText(rowText)
            .then(() => {
                alert("Copiado al portapapeles");
            })
            .catch((err) => {
                alert("Error al copiar");
                console.log("Error al copiar: ", err);
            });
    };

    return (
        <>
            {
                isVisibleModal ? 
                    <UserModal 
                        selectedUser={ selectedUser } 
                        setSelectedUser={ setSelectedUser } 
                        setIsVisibleModal={ setIsVisibleModal }
                        setIsInvited={ setIsInvited }
                    /> 
                :
                <div>
                    <div className="border-b-4 border-orange-600 p-5 px-10 flex items-center justify-between">
                        <h1 className="font-black text-5xl">Auditsa</h1>
                        <p className="text-xl">¡Hola{ selectedUser && ` ${selectedUser}` }!</p>
                    </div>

                    <div className="w-full px-10 py-5 md:w-3/4 mx-auto">
                        {
                            isInvited ?
                                <>
                                    <h2 className="text-xl font-bold mb-4">Tabla de Localidades</h2>

                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border border-black border-collapse overflow-x-auto">
                                            <thead className="bg-gray-200">
                                                <tr>
                                                    <th className="border border-black px-2 py-1">Usuario</th>
                                                    {
                                                        Object.keys(channels).map(loc => (
                                                            <th key={ loc } className="border border-black px-2 py-1">
                                                                { loc.replace(/_/g, " ") }
                                                            </th>
                                                        ))
                                                    }
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    userList.map(user => (
                                                        <tr key={ user.name }>
                                                            <td className="border border-black px-2 py-1 font-semibold">{ user.name }</td>
                                                            {
                                                                Object.keys(channels).map(loc => (
                                                                    <td
                                                                        key={ loc }
                                                                        className={`border border-black px-2 py-1 text-center ${
                                                                            user.locality === loc ? "bg-green-400 font-bold" : ""
                                                                        }`}
                                                                    >
                                                                        { user.locality === loc ? "✓" : "" }
                                                                    </td>
                                                                ))
                                                            }
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                            :
                                <>
                                    <div>
                                        <label 
                                            htmlFor="locality"
                                            className="block"
                                        >Localidad:</label>

                                        <Dropdown
                                            value={ selectedLocality }
                                            onChange={ handleChangeLocality }
                                            options={
                                                Object.keys(channels)
                                                    .filter(loc => !occupied.includes(loc) || loc === selectedLocality)
                                                    .map(loc => ({
                                                        label: loc.replace(/_/g, ' '),
                                                        value: loc
                                                    }))
                                            }
                                            placeholder="Selecciona una localidad"
                                            className="w-full mt-2 mb-4"
                                            disabled={ selectedLocality !== "" }
                                        />
                                    </div>

                                    {
                                        localityChannels.length > 0 &&
                                            <div className="mt-5">
                                                <p>{ channels[selectedLocality].length - localityChannels.length } / { channels[selectedLocality].length }</p>

                                                <table className="table-auto border border-black border-collapse w-full mt-5">
                                                    <thead className="bg-[#FF99FF]">
                                                        <tr className="text-sm">
                                                            <th className="border border-black px-2 py-2">ID</th>
                                                            <th className="border border-black px-2 py-2">ESTACIÓN/SIGLAS</th>
                                                            <th className="border border-black px-2 py-2">NOMBRE</th>
                                                            <th className="border border-black px-2 py-2">ACCIONES</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody className="bg-[#FFFF00]">
                                                        <tr className="text-sm text-center">
                                                            <td 
                                                                className="border border-black px-2 py-1 cursor-pointer"
                                                                onClick={ () => copyToClipboard(localityChannels[0].ID.toString()) }
                                                            >{ localityChannels[0].ID }</td>
                                                            <td className="border border-black px-2 py-1">{ localityChannels[0].season }</td>
                                                            <td className="border border-black px-2 py-1">{ localityChannels[0].name }</td>
                                                            <td>
                                                                <button
                                                                    onClick={ () => copyRowToClipboard(localityChannels[0]) }
                                                                    className="border border-gray-700 hover:bg-black hover:text-white font-semibold px-2 py-1 rounded cursor-pointer transition-colors"
                                                                >
                                                                    Drive
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="flex justify-center gap-16 mt-5">
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
                                </>
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default App;