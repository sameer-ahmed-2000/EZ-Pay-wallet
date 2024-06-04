import axios from "axios";
import { useEffect, useState } from "react";


const getUserDetails=async()=>{
    const token= localStorage.getItem('token');
    if(!token){
        throw new Error('No token found');
    }

    try{
        const response = await axios.get('http://localhost:3000/api/v1/user/me',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        return response.data;
    } catch (error){
        console.error('Error fetching user details:',error);
        throw error;
    }
};

export const Appbar= ()=>{
const[user,setUser]=useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(()=>{
    const fetchUserDetails=async ()=>{
        try {
            const userDetails=await getUserDetails();
            setUser(userDetails);
        } catch (error){
            setError('Failed to fetch user details')
        }finally{
            setLoading(false);
        }
    }
    fetchUserDetails();
},[]);

return (
    <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
        YesPay
        </div>
        <div className="flex">
        {user && user.firstName &&(
        <>
            <div className="flex flex-col justify-center h-full mr-4">
                Welcome, {user.firstName.toUpperCase()}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
        </>
        )}
        </div>
    </div>
);
}