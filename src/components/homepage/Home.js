import React,{Fragment} from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode"

const Home = () => {

    const loginsuccess=(res)=>{
        const userinfo=jwt_decode(res.credential)
        console.log(userinfo)
    }
    const onloginerror=(res)=>{
        console.log(res)
    }
  return (
    <Fragment>
        <GoogleLogin
        onSuccess={loginsuccess}
        onError={onloginerror}
/>;

<div>
    go to for api key 
    https://console.cloud.google.com/apis/dashboard?project=forward-entity-341810
</div>
    </Fragment>
  )
}

export default Home