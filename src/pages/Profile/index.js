import { Text,Button } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../../context/AuthContext'

function Profile({history}) {
    const {user,logout} =useAuth();

    const handleLogout=async()=>{
        logout(()=>{
            history.push("/")
        })
    }

    return (
        <div>
            <Text fontSize="25">Profile</Text>
            <code>
                {JSON.stringify(user)}
            </code>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile
