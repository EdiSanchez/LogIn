import React, {useState} from 'react';
import 'firebase/auth';
import{ useFirebaseApp, useUser } from 'reactfire';

export default (props) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const firebase = useFirebaseApp();
const user = useUser();

const submit = async ()=>{
    await firebase.auth().createUserWithEmailAndPassword(email, password);
}

const login = async ()=>{
    await firebase.auth().signInWithEmailAndPassword(email, password);
}

const logout = async() =>{
    await firebase.auth().signOut();
}

    return(
        <div>
            {!user &&
            <div style={formLogIn}>            
                <label htmlFor="email">Usuario </label>
                <input type="email" 
                    className="form-control" 
                    id="email"                 
                    placeholder="Usuario" 
                    onChange={ (ev) => setEmail(ev.target.value)}/><br/>
                <label htmlFor="password">Contraseña </label>
                <input type="password"
                    className="form-control" 
                    id="password"
                    placeholder="Contraseña"
                    onChange={ (ev) => setPassword(ev.target.value)}/><br/>
                <button onClick={submit} className="btn btn-danger btn-block">Add Account</button>               
                <button onClick={login} className="btn btn-danger btn-block">Iniciar Sesión</button>               
            </div>}                        
            {
                user && 
                <div style={formLogIn}>
                    {user && <h5>Usuario: {user.email}<br/></h5>}
                    <button onClick={logout} className="btn btn-danger btn-block">Cerrar Sesión</button>                
                </div>
            }
        </div>
    )
}

const formLogIn = {
    padding: '30px', borderRadius: '20px', border: '1px solid gray'
}