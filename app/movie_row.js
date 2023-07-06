import Action from "./Action.js"

const Row=(props)=>{
	return(
		<>
			<div className="row6">
				<div className="Movie_imge"><img src={props.data.imge}/></div>
				<div className="row6_col7">
					<div className="Mvovie_Name">
							<h2>{props.data.name}</h2>
							<p>Description</p>
							<p>{props.data.Description}</p>	
							<Action
								{...props}
							/>
					</div>
				</div>	
			</div>
		</>
	);
};

export default Row;


