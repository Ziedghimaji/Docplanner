import React from 'react';



const Service= (props)=>{
    return(
        <section className="services">
			<div className="patient">
				<h2 className="services-patient-title">For patients</h2>
				<p className="services-paragraphe">Find a doctor, book a visit and solve any health-related doubt</p>
				<div className="services-patient-content">
					<select className="country-select">
						{props.count.map(el=> <option value="">{el.ser}</option>)}
						
					</select>
					<div>
						<img class="patients-image" src="https://www.docplanner.com/img/screen-marketplace@2x.png"></img>
					</div>	
					
				</div>
				
			</div>
			<div class="patient doctor">
				<h2 class="services-patient-title">For doctors</h2>
				<p class="services-paragraphe">Save time managing visits and cut no-shows by half</p>
				<div>
					<img class="patients-image" src="https://www.docplanner.com/img/screen-saas@2x.png"></img>
				</div>
				
			</div>
			
		</section>
    )
}
export default Service;