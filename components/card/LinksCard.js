import React, { useState } from "react";
import { RiLinksFill } from "react-icons/ri";

const linksData = [
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
	{ link: "http://dummy-links.com" },
];

const LinksCard = () => {

    const [linksOpen, setLinksOpen] = useState(false)
	return (
		<div className={linksOpen ? "links__cards" : "links__cards translate"}>
			<div className="top" onClick={()=>setLinksOpen(v=>!v)}>
				<RiLinksFill />
				<h6>Links</h6>
			</div>
			<div className="bottom">
				{linksData.map((v, i) => (
					<p key={i}>{v.link}</p>
				))}
			</div>
		</div>
	);
};

export default LinksCard;
