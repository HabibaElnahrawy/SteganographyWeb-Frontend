import React , {useState, useEffect} from 'react'
import { Link,  useNavigate  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerInitiate } from '../redux/actions';

const SignUp = () => {

  const [state , setState]=useState(
    {
        displayName:"",
      email: "",
      password: "",
      rePassword: "",
    });

  const { currentUser }=  useSelector((state)=>state.user);
/*import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/home');*/
  const history = useNavigate();

  useEffect(()=>{
        if(currentUser){
            history('/home');
        }
  },[currentUser, history])

  const dispatch =useDispatch();
  const {email, password,displayName,rePassword} = state;

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== rePassword)
    {
        return; 
    }
    dispatch(registerInitiate(email,password,displayName));
    setState({email: "",displayName: "",password: "",rePassword: ""});
  };

  const handleChange=(e)=>{
    let {name , value}=e.target;
    setState({...state, [name]:value});
  };

  const navigate = useNavigate();
  const navigateHome = () => {
    
    navigate('/home');
  };
  return (
    <div class="flex justify-center items-center h-screen bg-gray-50">
    
    <form onSubmit={handleSubmit} class="w-96 p-6 shadow-lg bg-white rounded-md">
    <h2 class="font-bold text-2xl text-[#002D74]">Sign In</h2> 
    <div class="mt-3">
         
          <input  
        className="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2  "
          placeholder="Full name"
          onChange={handleChange} 
          defaultValue={displayName}
          required
          
          />
      </div>

      <div>
          
          <input   
          className="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2  "
          placeholder="Email Address"
          onChange={handleChange} 
          required
          defaultValue={email}
          />
      </div>
      <div>
          
          <input 
            className="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2  "
            type="password" 
            name="password" 
            placeholder="Password"
          onChange={handleChange} 
          required
          defaultValue={password}
          />
      </div>
      <div>
          
          <input 
          className="w-full border-gray-100  rounded-xl p-4 mt-1 bg-transparent  border-2  "
          type="password" 
          name="password" 
          placeholder="Comfirm Password"
          onChange={handleChange} 
          required
          defaultValue={rePassword}
          />
      </div>
      <div className='mt-8 flex flex-col gap-y-4'>
      <button onClick={navigateHome} className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Sign Up 
      </button>
      <Link to='/'> Back to Sign in</Link>
      </div>
    </form>
  </div>
  )
}

export default SignUp