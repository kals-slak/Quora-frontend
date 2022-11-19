import React from 'react'


import {
    MDBBtn,
  }
  from 'mdb-react-ui-kit';

export default function Nav() {
  return (
    <div>
       {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg bg-dark navbar-dark " >
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">

    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand" href="#">QUORA | NEC </a>
    
        {/* <button type="button" class="btn btn-danger    btn-lg" data-mdb-ripple-color="#fde35d"> Question ? </button>
        <!-- Button trigger modal --> */}
<button type="button" class="btn btn-danger btn-lg"  data-mdb-ripple-color="#fde35d" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Question?
</button>

{/* <!-- Modal --> */}
<div class="modal top fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
  <div class="modal-dialog  ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  
</nav>
{/* <!-- Navbar --> */}

    </div>
  )
}
