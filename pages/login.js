import Ract from 'react';

const LoginPage = () => {
    return(
        
        // <div style={{backgroundColor:"red", width: 600, height: 300, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        
        <div style={{
                    width:"500px",
                    height:"500px",
                    marginLeft:"25%",
                    marginTop:"5%",
                    backgroundColor:"#ccffff",
                    border:"1px solid black",
                    display:"flex",
                    flexDirection:"row", 
                    justifyContent:"center",
                    alignContent:"center",
                    // alignItems:"center"
                    }}>
            <form style={{}}>
                <h1>LOGIN PAGE</h1>
                <br/>
                <br/>
                <label style={{fontSize:"150%"}}> Email: 
                    <input type="text" />
                </label>
                <br/>
                <br/>
                <label style={{fontSize:"150%"}}> Password: 
                    <input type="password" />
                </label>
                <br/>
                <br/>
                <button style={{color:"blue", 
                                width:"100px",
                                height:"50px",
                                fontSize:"150%", 
                                boxShadow:"3px 3px 3px #4dd2ff"}}>Log In</button>
            </form>
        </div>
    )
}

export default LoginPage