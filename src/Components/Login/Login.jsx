import { useState } from "react";
import app from "../../FireBase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";

// const auth =getAuth(app);
    // const provider = new GoogleAuthProvider();

const Login = () => {
    const [user,setUser] = useState(null);
    const auth =getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignin =()=>{
        signInWithPopup(auth,provider)
        .then(result =>{
            const loguser= result.user;
            setUser(loguser);
        })
        .catch(error =>{
            console.log('error',error.message);
        })
        
    }
    const handlesignout =()=>{
        signOut(auth)
        .then(result=>{
            setUser(null);
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div>
            {
                user !==null ? <button onClick={handlesignout}>Signout</button>:<button onClick={handleGoogleSignin}>google login</button>
            }
            <div>
                <h3>user :{user?.displayName}</h3>
                <h3>user :{user?.email}</h3>
            </div>
            
        </div>
    );
};

export default Login;