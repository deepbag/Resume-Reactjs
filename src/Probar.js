import React from 'react';

function Probar(){
    return( 
      <>
       <div className="mt-4 p-2">
          <h4 className="pt-2">Skills</h4>
          <hr />

        <h6>Wordpress</h6>   
        <div className="progress my-2">
          <div className="progress-bar bg-success" role="progressbar"
            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
            90% Complete 
          </div>
        </div>

        <h6>HTML</h6>   
        <div className="progress my-2">
          <div className="progress-bar bg-warning" role="progressbar"
            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
            80% Complete 
          </div>
        </div>
        
        <h6>CSS</h6>
        <div className="progress my-2">
          <div className="progress-bar bg-info" role="progressbar"
            aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
            70% Complete 
          </div>
        </div>

        

        <h6>PHP</h6>
        <div className="progress my-2">
          <div className="progress-bar bg-danger" role="progressbar"
            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
            50% Complete 
          </div>
        </div>

        <h6>Bootstrap</h6>
        <div className="progress my-2">
          <div className="progress-bar bg-warning" role="progressbar"
            aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
            80% Complete 
          </div>
        </div>
        
        <h6>ReactJs</h6>
        <div className="progress my-2">
          <div className="progress-bar bg-danger" role="progressbar"
            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
            60% Complete 
          </div>
        </div>
        </div>
      </>

    )
}

export default Probar;