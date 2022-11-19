import React, { Component } from 'react';
import axios from "axios";
// import { useNavigate} from 'react-router-dom';
// import {redirect} from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
   // MDBIcon
  }
  from 'mdb-react-ui-kit';
  import "./styles.css";
//import { Navigate } from 'react-router-dom';


class LoginForm extends Component {
  state = {
    email:"",
    pass: ""

  };

  handleSubmit = async e => {
    e.preventDefault();
    //const {users}  = this.state;
    console.log(e.target.email.value+" "+e.target.pass.value);
    const em= e.target.email.value;
    const pa= e.target.pass.value;
    let ma = JSON.stringify({
      email: em,
      pass: pa
  })
  //  const resp = await fetch("http://localhost:8080/user/auth",{ method: 'POST', headers: { 'Accept': '*/*', 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>' }, body: JSON.stringify(ma), });
   const resp = await axios.post('http://localhost:8080/user/auth', ma,{headers: { "Content-Type": "application/json"} });
    if(resp.data=== -1){
      alert("worng");
    }
    else{
      // const navigate = useNavigate();
      // navigate("/home");
    //  Navigate("/home");
    // alert("good "+resp.data);
    return window.location = '/home';

    }
    //console.log(resp);
    
  };
  // async componentDidMount() {
  //   const response = await fetch('http://localhost:8080/user',{ method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({"email":}), });
  //   const body = await response.json();
  //   console.log(body)
  //   this.setState({users: body});
  // }

  render() {
    
    return (
        <form onSubmit={this.handleSubmit}>
        <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
  
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" name = "email"/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" name = "pass"/>
  
                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5' color='success' size='lg'>
                  Login
                </MDBBtn>
  
                {/* <div className='d-flex flex-row mt-3 mb-5'>
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg"/>
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg"/>
                  </MDBBtn>
  
                  <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg"/>
                  </MDBBtn>
                </div> */}
  
                <div>
                  <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
  
                </div>
              </MDBCardBody>
            </MDBCard>
  
          </MDBCol>
        </MDBRow>
  
      </MDBContainer>
       </form>
    );
  }
}
export default LoginForm;
