const AuthService = {
    register: async (user) =>{
        try {
            const res = await fetch("http://localhost:8080/user/register",{
                method: "POST",
                body: JSON.stringify(user),
                headers: {"Content-Type": "application/json"},
            });
            const data = await res.json();
            return data;
            
        } catch (error) {
            return {error: error}
            
        }

     },

     login: async (user) => {
        try {
            const res = await fetch("http://localhost:8080/user/login",{
                method: "post",
                headers: {
                    username: user.username,
                    password: user.password
                }, 
                
            })
            const data = await res.text();
            console.log("Token" + data);
            return data;
            
        } catch (error) {
            return {error: error}
            
        }
     }
}
export default AuthService;