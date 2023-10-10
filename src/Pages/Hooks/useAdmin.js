import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useAdmin = user =>{
    
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        const email = user?.email;
       
        if(email){
            fetch(`https://hydrau-auto-parts-manufactures.vercel.app/admin/${email}`,{
               method: 'GET',
               headers:{
                   'content-type': 'application/json',
                    authorization:`Barear ${localStorage.getItem('accessToken')}`
               }
           })
           .then(res => {
            if(res.status === 403){
                toast.error(`You are not permited to access this page`);
                navigate('/dashboard');
            }
            return res.json()})
           .then(data => {
               setAdmin(data);
               setAdminLoading(false);
           })
        }
    },[user]);

    return [admin, adminLoading];

}

export default useAdmin;