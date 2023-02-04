import { Button } from "@mui/material";
import React from "react";

const SecondaryButton = ({ startIcon, endIcon, onClick, children }) => {
	return (
		<Button
			className="secondary__button custom__button"
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default SecondaryButton;
