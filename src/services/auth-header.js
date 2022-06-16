export default function authHeader(){
    
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.jwt) {
        return { 
            Authorization: 'Bearer ' + user.jwt
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "*",
            // "Access-Control-Allow-Headers": "*"
        };
    } else {
        return {};
    }
}