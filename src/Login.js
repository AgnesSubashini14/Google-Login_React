import React,{useEffect, useState} from "react";
import {gapi} from 'gapi-script';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
export default function Login(){
    const initializeGapi=()=>{
        gapi.client.init({
            clientId:'GAP_CLIENT_ID',

            scope:"",
        });
    };
    useEffect(()=>{
        gapi.load("client:auth2",initializeGapi)
    })
   
    const clientId="428002124059-cghsktm9c11n8d9hslbs88kvnc24n6aa.apps.googleusercontent.com";
    const[showLoginButton,setShowLoginButton]=useState(true);
    const[showLogoutButton,setShowLogoutButton]=useState(false);
    const onLoginSuccess=(res)=>{
      const  data=res.profileObj
        console.log('LoginSuccess:',data);
        setShowLoginButton(false);
        setShowLogoutButton(true);
     
        // document.writeln(data.email+"<br/> ");
        // document.writeln(data.googleId);
       document.writeln("Email :"+ data.email+"<br/>");
       document.writeln("familyName :"+ data.familyName +"<br/>");
       document.writeln("givenName :"+ data.givenName + "<br/>");
       document.writeln("googleId :"+ data.googleId + "<br/>");
       document.writeln("imageUrl :"+ data.imageUrl + "<br/>");
       document.writeln("name :"+ data.name + "<br/>");






        
    }
    const onFailureSuccess=(res)=>{
        console.log('Login Failed:',res);
    }
    const onSignoutSuccess=()=>{
        alert('You have been signed out successfully');
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }
 
    return(
        <div>
        
  

        

            {showLoginButton ?
            <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> : null
            }
            {showLogoutButton ?
   <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> : null
}



     
</div>
    )
}       