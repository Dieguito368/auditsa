import { useEffect, useState } from "react";
import { socket } from './utils/socket'; 
import { toast, ToastContainer } from "react-toastify";
import { ArrowRight, BookmarkCheck, CheckCircle, ClipboardPaste, X } from "lucide-react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import UserModal from "./components/UserModal";
import { Channel, channels } from "./data/channels";
import { localities } from "./data/localities";
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
    
    const cancelLocality = () => {
        socket.emit("releaseLocality", selectedLocality);
    
        setSelectedLocality("");

        setLocalityChannels([]);
    }

    const handleClickJump = () => {
        const currentChannel = localityChannels[0];
        
        const newArray = localityChannels.filter(channel => channel.ID !== currentChannel.ID);

        setLocalityChannels([ ...newArray,  currentChannel ]);
    };

    const copyToClipboard = (ID: string) => {
        navigator.clipboard.writeText(ID)
            .then(() => {
                toast.success("Copiado");
            })
            .catch((err) => {
                toast.error("Error al copiar");
                console.log("Error al copiar: ", err);
            });
    };

    const copyRowToClipboard = (channel: Channel) => {
        const rowText = `${channel.server || ""}\t${channel.locality}\t${channel.ID}\t${channel.season}`;

        navigator.clipboard.writeText(rowText)
            .then(() => {
                toast.success("Copiado al portapapeles");
            })
            .catch((err) => {
                toast.error("Error al copiar");
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
                    <div className="animate__animated animate__fadeIn">
                        <div className="border-b-4 border-orange-600 p-5 px-10 flex items-center justify-between">
                            <h1 className="font-black text-5xl">Auditsa</h1>
                            <p className="text-xl">¡Hola{ selectedUser && ` ${selectedUser}` }!</p>
                        </div>

                        <div className="w-full px-10 py-5 md:w-3/4 mx-auto">
                            {
                                isInvited ?
                                    <>
                                        { 
                                            userList.length > 0 ?
                                                <>
                                                    <h2 className="text-xl font-bold mb-4">Localidades ACAM</h2>
                                                    
                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full border-collapse overflow-x-auto">
                                                            <thead className="bg-slate-100">
                                                                <tr>
                                                                    <th className="border border-gray-300 px-5 py-2 text-sm"></th>
                                                                    {
                                                                        userList.map(user => (
                                                                            <th key={ user.name } className="border border-gray-300 px-2 py-3 text-sm uppercase">
                                                                                { user.name}
                                                                            </th>
                                                                        ))
                                                                    }
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {
                                                                    localities.map(locality => (
                                                                        <tr key={ locality.code }>
                                                                            <th className="border border-gray-300 px-2 py-3 font-semibold text-center text-sm w-1/2">{ locality.name }</th>

                                                                            { 
                                                                                userList.map(user => (
                                                                                    <td 
                                                                                        key={ user.name }
                                                                                        className={ 
                                                                                            `border border-gray-300 px-2 py-1 text-center animate__animated ${
                                                                                            user.locality === locality.code ? "bg-green-500 text-white animate__fadeIn": ""}` 
                                                                                    }> 
                                                                                        { user.locality === locality.code ? <CheckCircle width={ 20 } className="mx-auto" /> : "" }
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

                                            <h2 className="text-xl uppercase text-center text-gray-600 font-black mt-10">No hay usuarios conectados</h2>
                                        }

                                    </>
                                :
                                    <>
                                        <ToastContainer />

                                        <div>
                                            <label 
                                                htmlFor="locality"
                                                className="block"
                                            >Localidad:</label>

                                            <Dropdown
                                                value={ selectedLocality }
                                                onChange={ handleChangeLocality }
                                                options={
                                                    localities
                                                        .filter(loc => !occupied.includes(loc.code) || loc.code === selectedLocality)
                                                        .map(loc => ({
                                                            label: loc.name,
                                                            value: loc.code
                                                        }))
                                                }
                                                placeholder="Selecciona una localidad"
                                                className="w-full mt-2 mb-4"
                                                disabled={ selectedLocality !== "" }
                                            />
                                        </div>

                                        {
                                            localityChannels.length > 0 &&
                                                <div className="mt-5 animate__animated animate__fadeIn">
                                                    <div className="flex justify-between items-center mb-10">
                                                        <p>{ channels[selectedLocality].length - localityChannels.length } / { channels[selectedLocality].length }</p>

                                                        <button 
                                                            type="button" 
                                                            onClick={ cancelLocality }
                                                            className=" rounded bg-red-500 w-32 py-2 text-white font-bold text-xs flex uppercase justify-center items-center gap-2 p-2 hover:bg-red-600 transition-colors"
                                                        >
                                                            <X size={ 22 } />
                                                            Cancelar
                                                        </button>
                                                    </div>

                                                    <div className="overflow-x-auto">
                                                        <table className="min-w-full border-collapse overflow-x-auto">
                                                            <thead className="bg-slate-100">
                                                                <tr>
                                                                    <td className="border border-gray-300 px-5 py-4 text-sm font-bold text-center">ID</td>
                                                                    <td className="border border-gray-300 px-5 py-4 text-sm font-bold text-center">ESTACIÓN/SIGLAS</td>
                                                                    <td className="border border-gray-300 px-5 py-4 text-sm font-bold text-center">NOMBRE</td>
                                                                    <td className="border border-gray-300 px-5 py-4 text-sm font-bold text-center">ACCIONES</td>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td 
                                                                        className="border border-gray-300 px-5 py-4 text-center text-sm"
                                                                        onClick={ () => copyToClipboard(localityChannels[0].ID.toString()) }
                                                                    >{ localityChannels[0].ID }</td>
                                                                    <td 
                                                                        className="border border-gray-300 px-5 py-4 text-center text-sm"
                                                                    >{ localityChannels[0].season }</td>
                                                                    <td 
                                                                        className="border border-gray-300 px-5 py-4 text-center text-sm"
                                                                    >{ localityChannels[0].name }</td>
                                                                    <td className="border border-gray-300 px-5 py-4 text-sm flex justify-center">
                                                                        <button
                                                                            onClick={ () => copyRowToClipboard(localityChannels[0]) }
                                                                            className="border border-gray-700 text-sm flex items-center gap-2 hover:bg-black hover:text-white font-semibold px-3 py-1 rounded cursor-pointer transition-colors"
                                                                        >
                                                                            <ClipboardPaste width={ 16 } />
                                                                            Drive
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="flex justify-center gap-16 mt-8">
                                                        <button 
                                                            type="button" 
                                                            onClick={ handleClickJump }
                                                            className=" rounded bg-gray-500 w-32 py-2 text-white font-bold text-xs flex uppercase justify-center items-center gap-2 p-2 hover:bg-gray-600 transition-colors"
                                                        >
                                                            <ArrowRight size={ 22 } />
                                                            Saltar
                                                        </button>

                                                        <button 
                                                            type="button" 
                                                            className=" rounded bg-green-500 w-32 py-2 text-white font-bold text-xs flex uppercase justify-center items-center gap-5 p-2 hover:bg-green-600 transition-colors"
                                                            onClick={ handleClickOK }
                                                        >
                                                            <BookmarkCheck size={ 22 } />    
                                                            Ok
                                                        </button>
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