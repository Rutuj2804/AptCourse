import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ startIcon, endIcon, onClick, children, type }) => {
	return (
		<Button
			className="primary__button custom__button"
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			type={type}
		>
			{children}
		</Button>
	);
};

export default PrimaryButton;
