import React from 'react';



const Biographie = (props)=>{
    return(
        <section class="biography">
			<p class="global-paragraphe">We are global company with local culture</p>
			<div class="names">
				{props.ima.map(el=> <a href="#"><img src={el.image} width="20" height="20"></img> ZnanyLekarz</a>
				
                )}
				
			</div>
			
			
		</section>
    )
}
export default Biographie;