import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ startIcon, endIcon, onClick, children }) => {
	return (
		<Button
			className="primary__button custom__button"
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default PrimaryButton;
