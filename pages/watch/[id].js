import Head from "next/head";
import React from "react";
import VideoLinksCard from "../../components/card/VideoLinksCard";
import VideoPlayer from "../../components/player/VideoPlayer";

const Watch = () => {
	return (
		<section>
			<Head>
				<title>Lesson</title>
			</Head>
			<VideoPlayer />
			<div className="title__and__description">
				{/*  */}
			</div>
			<VideoLinksCard />
		</section>
	);
};

export default Watch;
