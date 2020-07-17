import React from 'react';

class GoogleAuth extends React.Component{

    state = { isSignedIn : null }

    componentDidMount(){
        //the google api script is added to index.html .. the script will be laded on to window 
        // so we use window object to initialise google client ... you can see these steps in console window

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175974938762-7cqltpci3pmia9im0blj19sshbjm2fuh.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }

     renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div> dont know </div>
        }else if (this.state.isSignedIn){
            return <div>Signed In</div>
        }else{
            return <div>not signed in</div>
        }
    }

    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}
export default GoogleAuth;