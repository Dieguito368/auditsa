import { useEffect, useState } from "react";
import UserModal from "./components/UserModal";
import { socket } from './utils/socket'; 
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Channel, channels } from "./data/channels";
import 'primeicons/primeicons.css';
import 'animate.css';
import { toast, ToastContainer } from "react-toastify";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ArrowRight, BookmarkCheck, CheckCircle, ClipboardPaste } from "lucide-react";

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
                toast.success("Copiado");
            })
            .catch((err) => {
                console.error("Error al copiar: ", err);
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
                                        <h2 className="text-xl font-bold mb-4">Tabla de Localidades</h2>

                                        <div className="overflow-x-auto">
                                            <table className="min-w-full border-collapse overflow-x-auto">
                                                <thead className="bg-slate-100">
                                                    <tr>
                                                        <th className="border border-gray-300 px-5 py-2 text-sm">Usuario</th>
                                                        {
                                                            Object.keys(channels).map(loc => (
                                                                <th key={ loc } className="border border-gray-300 px-2 py-1 text-sm">
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
                                                                <td className="border border-gray-300 px-2 py-3 font-semibold text-center text-sm">{ user.name }</td>
                                                                {
                                                                    Object.keys(channels).map(loc => (
                                                                        <td
                                                                            key={ loc }
                                                                            className={`border border-gray-300 px-2 py-1 text-center ${
                                                                                user.locality === loc ? "bg-green-500 text-white font-bold" : ""
                                                                            }`}
                                                                        >
                                                                            { user.locality === loc ? <CheckCircle width={ 20 } className="mx-auto" /> : "" }
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
                                                    <p className="mb-5">{ channels[selectedLocality].length - localityChannels.length } / { channels[selectedLocality].length }</p>

                                                    <DataTable 
                                                        value={ localityChannels[0] ? [localityChannels[0]] : [] } 
                                                        showGridlines 
                                                        tableStyle={{ fontSize: "15px" }}
                                                    >
                                                        <Column field="ID" header="ID"></Column>
                                                        <Column field="season" header="ESTACIÓN/SIGLAS" ></Column>
                                                        <Column field="name" header="NOMBRE"></Column>
                                                        <Column 
                                                            header="Acciones"
                                                            body={ 
                                                                (rowData: Channel) => (
                                                                    <button
                                                                        onClick={ () => copyRowToClipboard(rowData) }
                                                                        className="border flex border-gray-700 text-sm  items-center  gap-2 hover:bg-black hover:text-white font-semibold px-3 py-1 rounded cursor-pointer transition-colors"
                                                                    >
                                                                        <ClipboardPaste width={ 16 } />
                                                                        Drive
                                                                    </button>
                                                                )
                                                            }
                                                        ></Column>
                                                    </DataTable>

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