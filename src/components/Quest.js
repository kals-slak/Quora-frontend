import React from 'react'

export default function Quest(props) {




  return (
    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="w-50 card border border-primary shadow-100 ">
  <div class="card-body">
    <h5 class="card-title">{props.question}</h5>
    {/* <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p> */}

    {/* <button type="button" class="btn btn-primary">Answer</button>
    <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
  Launch demo modal
</button>
{/* 
<!-- Modal --> */}
<div class="modal top fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-mdb-backdrop="true" data-mdb-keyboard="true">
  <div class="modal-dialog modal-lg  modal-dialog-centered">
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
  <div class="card-footer">
    <button type="button" class="btn btn-outline-success btn-rounded   " data-mdb-ripple-color="#000000">⇑ {props.up}</button>
    <button type="button" class="btn btn-outline-dark btn-rounded   " data-mdb-ripple-color="#000000">⇓ {props.down}</button>
  </div>
</div>
</div>
    
  )
}
