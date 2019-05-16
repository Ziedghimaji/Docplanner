import React from 'react';

function Navmennu(props) {
    return (
       
            
        <div className="menu">
       { props.navBar.map(el => <ul className="list-menu"><li> <a className='normal-link' href='#' className="dropdown-item">{ el.title}</a>
        {
          !el.tab ? null : el.tab.map(x=>
                                            <ul className='drop-list'>
                                            <li>
                                                <a className='normal-link' href='#'>{x}</a>
                                            </li>
                                            </ul> 
            )
            
       }
       </li>

       </ul>)
    }
       </div>
    )
}

       
       

export default Navmennu ;




