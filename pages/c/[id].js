import { useRouter } from "next/router";
import React from "react";

const Author = () => {
    const router = useRouter()
	return (
		<div>
			<h1>{router.query.id}</h1>
		</div>
	);
};

export default Author;
