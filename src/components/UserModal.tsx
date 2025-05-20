import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { socket } from '../utils/socket';
import { Dropdown } from 'primereact/dropdown';
import { LogIn, User } from 'lucide-react';
        
type UserModalProps = {
    selectedUser: string
    setSelectedUser: Dispatch<SetStateAction<string>>
    setIsVisibleModal: Dispatch<SetStateAction<boolean>>
    setIsInvited: Dispatch<SetStateAction<boolean>>
}

const UserModal = ({ selectedUser, setSelectedUser,  setIsVisibleModal, setIsInvited } : UserModalProps) => {
    const users = [
        { name: 'Alexis', code: 'Alexis' },
        { name: 'Adrian', code: 'Adrian' },
        { name: 'Diego', code: 'Diego' },
        { name: 'Rodrigo', code: 'Rodrigo' },
        { name: 'Karla', code: 'Karla' },
        { name: 'Antonio', code: 'Antonio' }
    ];

    const [ missingUsers, setMissingUsers ] = useState(users);

    useEffect(() => {
        socket.emit("getCurrentUsers");

        socket.on("currentUsers", (connectedUsers: string[]) => {
            console.log("Usuarios conectados:", connectedUsers);

            const updatedUsers = users.filter(user => !connectedUsers.includes(user.name));
            setMissingUsers(updatedUsers);
        });

        socket.on("userJoined", (name: string) => {
            const updatedUsers = users.filter(user => user.name !== name);
            
            setMissingUsers(updatedUsers);
        });

        return () => {
            socket.off("currentUsers");
            socket.off("userJoined");
        }
    }, []);

    const handleJoin = () => {
        if(selectedUser) {
            socket.emit("join", selectedUser);

            setIsVisibleModal(false);
        }
    }

    return (
        <div className="bg-black/60 w-full h-screen flex items-center justify-center">
            <div className="bg-white md:1/2 lg:w-1/3 w-3/4 rounded-xl animate__animated animate__fadeInDown">
                <div className="border-b-4 border-orange-600 p-5 text-center font-black text-5xl">Auditsa</div>
                
                <div className="p-10">
                    <h1 className="text-center font-bold text-2xl">¿Quién eres?</h1>
                    <p className="text-center text-sm text-slate-600 mt-2">Selecciona tu nombre para ingresar</p>

                    <form action="#" className='mt-5'>
                        <Dropdown 
                            value={  selectedUser } 
                            onChange={ (e) => { setSelectedUser(e.target.value) } } 
                            options={ missingUsers } 
                            optionLabel="name" 
                            optionValue="code"
                            placeholder="Selecciona tu nombre" 
                            className="w-full md:w-14rem mb-8" 
                        />

                        <div className="flex flex-col gap-5">
                            <button 
                                type="button" 
                                className="w-full md:w-14rem bg-orange-500 font-bold text-xs flex uppercase justify-center items-center gap-5 p-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-500"
                                disabled={ selectedUser === "" }
                                onClick={ handleJoin }
                            >
                                <LogIn size={ 22 } />

                                <div className="mt-1">
                                    Entrar
                                </div>
                            </button>

                            <button 
                                type="button" 
                                className="w-full md:w-14rem font-bold text-xs flex uppercase justify-center items-center gap-5 p-2 hover:text-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-black"
                                disabled={ selectedUser !== "" }
                                onClick={ 
                                    () => {
                                        setIsInvited(true);
                                        setIsVisibleModal(false);
                                    } 
                                }
                            >
                                <User size={ 22 } />

                                <div className="mt-1">
                                    Entrar como invitado
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserModal;