import React, {useEffect,useRef,useState } from 'react'
import Navhome from '../Components/Navhome'
import {Link,useHistory} from 'react-router-dom';
import lottie from "lottie-web";
import axios from "axios"

export default function Signup() {

    const history = useHistory();
    const container = useRef(null)
    useEffect( () => {
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true ,
            autoplay:true,
            animationData: require('../assests/lotties/62952-money-plant.json')
        })
    },[])

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = inputs;

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // setSubmitted(true);
      
            // get return url from location state or default to home page
            // const { from } = location.state || { from: { pathname: "/" } };
        //     dispatch(userActions.login(username, password, from));

        axios.post('http://localhost:4000/users', inputs)
        .then( (res) =>{
            console.log(res.status);
            if(res.status===200){
                history.push("./signin")
            }
        })
        .catch( (err) => console.log(err));
        
    }


    return (
        <>
        <Navhome page="LogIn" />
        <section className="signup-section">
        <div className="section-wrapper">
            <div className="signup-form-wrapper">
                
            <div className="signup-form-div">
                <form  method="POST" onSubmit={handleSubmit} >

                <div className="signup-form-heading">
                    Sign Up
                </div>
                <div className="form-credentials signup-form-input">
                    <div>
                        <i className="ri-user-fill"></i>
                        <input type="text" name="name" 
                        value={name} onChange={handleChange}
                        placeholder="Your Name" required/>
                    </div>
                </div>
                <div className="form-credentials signup-form-input">
                    <div>
                        <i className="ri-mail-fill"></i> 
                        <input type="text" name="email" 
                        value={email} onChange={handleChange}
                        placeholder="Your E-mail" />
                    </div>
                </div>
                <div className="form-credentials signup-form-input">
                    <div>
                        <i className="ri-lock-2-fill"></i> 
                        <input type="password" name="password"
                        value={password} onChange={handleChange}
                         placeholder="Password" />
                    </div>
                </div>
                <div className="form-credentials signup-form-input">
                    <div>
                        <i className="ri-lock-2-line"></i> 
                        <input type="password" name="confirm_password" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="form-credentials checkbox-agree-hidden">
                    <div>
                        {/* <!-- <i className="ri-lock-2-line"></i>  --> */}
                        {/* <!-- <span></span><span></span> --> */}
                        {/* <!-- <i className="ri-checkbox-blank-line"></i>  --> */}
                        <input type="checkbox" className="checkbox-agree-input" name="agreeTnc" placeholder="Repeat Your Password" required/>
                        <div>I agree to &nbsp;<Link to="#"> Terms & Conditions</Link></div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="form-credentials signup-submit ">
                    <div>
                        <button type="submit" name="signup" id="signup" 
                        value="Register">Register</button>
                    </div>
                </div>
                <div className="login-option-onSignup">Or, I am already a Member ? &nbsp;<Link to="#">Login here</Link></div>
                
            
            </form>
            </div>
            </div>

            <div className="signup-img">
                <div className="signup-lottie" ref={container}>
                </div>
                <div>
                    I am already a Member ? &nbsp; <Link to="/signin">Login here</Link> 
                </div>
            </div>
        </div>
        </section>
    </>
    )
}
