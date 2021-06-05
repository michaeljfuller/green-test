import useStoreSelector from "../../hooks/useStoreSelector";
import {useAuthApis} from "../../contexts/AuthApiContext";
import useStoreDispatch from "../../hooks/useStoreDispatch";
import {useState} from "react";
import {removeUser} from "../../store/user";

export interface DashboardProps {

}
export function Dashboard(props: DashboardProps) {
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const userState = useStoreSelector((state) => state.user);
    const dispatch = useStoreDispatch();
    const {signOut} = useAuthApis();

    const handleSignOut = async () => {
        try {
            setDisabled(true);
            const res = await signOut();
            if (res.success) return dispatch(removeUser());
        } catch (e) {
            setError(e.message || 'Error');
        }
        setDisabled(false);
    }

    return <div>
        <h1>Dashboard</h1>
        <p>Signed in as {userState.current.email}</p>

        <button onClick={handleSignOut} disabled={disabled}>Sign Out</button>
        {error ? <p style={{color:'red'}}>{error}</p> : null}
    </div>;
}
