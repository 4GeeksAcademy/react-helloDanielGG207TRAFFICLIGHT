import React from "react";
import {useEffect, useState} from "react";




//include images into your bundle


//create your first component
const Home = () => {
	const [status, setStatus] = useState("null")
	const sequence = ["green" , "green", "red", "orange"]
	const [array, setArray] = useState([])
    
	return (
		<div className="Container main">

            <div className="bg-secondary m-1 rounded"> 
			
			
			
			<div className={ "rounded-circle bg-success " +  (status == "green" ? "On" :"Off")} onClick={() => {

				setStatus("green") 
			    
				}}>
				
			</div>
			<div className={ "rounded-circle bg-warning " +  (status == "orange" ? "On" :"Off")} onClick ={() => {
				{
				setStatus("orange") 
			    
				
			}}}> 
            
			
			 
			</div>
			   
			<div className={ "rounded-circle bg-danger " +  (status == "red" ? "On" :"Off")}onClick = {() => {
				setStatus("red") 
			    
			}}>
			

			
			
			</div>


		</div>
		</div>
			
		
	);
};



export default Home;