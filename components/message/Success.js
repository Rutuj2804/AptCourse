import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSuccess } from "../../store/settings"
import {FaCheckCircle} from "react-icons/fa"

const Success = () => {

	const dispatch = useDispatch()

    const success_msg = useSelector(state=>state.settings.success)

	const handleContinue = () => {
		dispatch(setSuccess(""))
	}

	return (
		<div className="success__Wrapper">
			<div className="box">
				<div className="icon">
					<FaCheckCircle />
				</div>
				<div className="msg">
					<p>{success_msg}</p>
                    <Button onClick={()=>handleContinue()}>Continue</Button>
				</div>
			</div>
		</div>
	);
};

export default Success;
