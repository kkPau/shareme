import React from 'react'
import shareVideo from '../assets/Share.mp4'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logowhite.png'
import GoogleLogin from '@leecheuk/react-google-login'
import { FcGoogle } from 'react-icons/fc'

import {client} from '../client'

const Login = () => {
  const navigate = useNavigate();

    const responseGoogle = (response) => {
      console.log(response);
        // localStorage.setItem('user', JSON.stringify(response.profileObj))

        // const { name, googleId, imageUrl} = response.profileObj

        // const doc = {
        //   _id: googleId,
        //   _type: 'user',
        //   userName: name,
        //   image: imageUrl,
        // }

        // client.createIfNotExists(doc).then(()=> {
        //   navigate('/', {replace: true})
        // })
  }

  const googletoken = import.meta.env.VITE_GOOGLE_API_TOKEN

  console.log(googletoken)

  return (
    <div className='flex justify-start items-center h-screen'>
        <div className='relative h-full w-full'>
            <video className='absolute h-full object-cover'
                src={shareVideo}
                itemType='video.mp4'
                autoPlay
                controls = {false}
                muted
                loop
            />

            <div className='absolute inset-0 flex flex-col justify-center items-center bg-blackOverlay'>
            <div className='p-5'>
            <img src={logo} width="130px" alt="Logo" />
            </div>

          <div className='shadow-2xl'>
            <GoogleLogin
              clientId={googletoken}
              render = {(renderProps) => (
                <button 
                  type='button' 
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4'/> Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
            </div>
        </div>
    </div>
  )
}

export default Login