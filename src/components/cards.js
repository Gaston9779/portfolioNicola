import React from 'react';


function Cards() {
    return (
        <div className="container">
            <div className="card">
              
              <h3 className="title">Web Design</h3>
              <div className='webdes' src="#" alt="#" />
                <div className="button">
                    
                    <button className="link" onClick="">Button</button>
                </div>
                
            </div>
        
        <div className="card">
          <h3 className="title">Web Developer</h3>
          <div className='webdev' src="#" alt="#" />
          <div className="button">
            
            <button className="link" onClick="">Button</button>
        </div>
        </div>
        
        
      </div>
        
    )
}

export default Cards;