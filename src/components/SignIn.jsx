import React , {useState, useEffect} from 'react'
import { Link, useHistory,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


const SignIn = ({visible}) => {
  const [state , setState]=useState(
    {
      email: "",
      password: "",
    }
    );

    const [name,setName]=useState('');
    const [pass,setPass]=useState('');


    const handleSubmit=()=>{};
    const handleGoogleSignIn=()=>{};
    const handleFacebookSignIn=()=>{};
    const handleChange=()=>{};
    const {email, password}=state;
    
    
    
  const navigate = useNavigate();
  const navigateHome = () => {
    
    navigate('/home');
  };
  
  if(!visible) return null;

///////////////////////////////////////



const handleNameChange=(value) =>{
  setName(value);
};
const handlePasswordChange=(value) =>{
  setPass(value);
};

const handleLogin=()=>{ 
    const data = {
        Name: name,
        Password: pass
    };
 const url='https://localhost:44392/api/Test/Login';
  axios.post(url,data).then((result)=>{
    if(result.data=='Data inserted ')
    alert('data saved');
    else 
    alert(result.data);

  }).catch((error)=>{
      alert(error);
  })
};

  return (

  
    <div>
    <div className='fixed inset-0 bg-black bg-opacity-30 '>

    
    <div className="flex justify-center items-center h-screen fixed inset-0 bg-black bg-opacity-30  ">
       
    <div >
     
    <div >
    <form  onSubmit={navigateHome} className='mt-8  rounded-2xl  bg-white  w-96 px-14 py-20 z-10 '>
    <h2 class="font-bold text-2xl text-[#002D74] mb-5">Login</h2>
      <div >
          
          <input className="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2  "
          
          name="email" placeholder="Username" 
          //onChange={handleChange} 
          required
          defaultValue={email}
          onChange={(e)=> handleNameChange(e.target.value)}
          />
      </div>
      <div className='relative'>
          <input class="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2"
          type="password" 
          name="password" 
          placeholder="Password"
          //onChange={handleChange} 
          required
          defaultValue={password}
          onChange={(e)=> handlePasswordChange(e.target.value)}
          /> 
         
      </div>

      <div className='mt-4  justify-between items-center'>
        <div>
          <input type="checkbox"
          id='remember'
          />
          <label className='ml-2 font-medium text-base 'for="remember">Remember me</label>
        </div>
        <button  className=' font-medium text-base ' >Forgot password</button>
      </div>

      <div className='mt-8 flex flex-col gap-y-4'>
      <button  onClick={()=> handleLogin()} className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login
      </button>
      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400"/>
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400"/>
      </div>
      <button onClick={navigateHome} className="flex items-center justify-center bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" >
      <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
          Sign in with Google
      
      </button>
      <button onClick={navigateHome} className="flex items-center justify-center bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"  >
        
          Sign in with Facebook
       
      </button>
      </div>
  <div className='mt-8 flex justify-center items-center'>
      <p className='font-medium text-base'>Don't have an account?</p>
      <Link to='/SignUp' className='ml-2'>Sign up</Link>
  </div>
    </form>
    </div>

  </div>
  </div>
  </div>
  


 {/* whenClicked is a property not an event, per se. 
  <div className='hidden lg:flex h-full w-1/2 items-center justify-center  bg-gray-200'>
    <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full'/>
  </div>
*/}


  </div>
  )
}

export default SignIn