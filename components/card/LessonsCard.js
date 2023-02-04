import React from "react";
import { CiViewTimeline } from "react-icons/ci";

const LessonsCard = ({ data, i }) => {
	return (
		<div className="lessons__card">
			<div className="top">
				<h2>{i < 10 ? `0${i}` : i}</h2>
				<h1>{data.name}</h1>
				<p>{data.description}</p>
				<div>
					<CiViewTimeline />
					<span>
						{data.lessons.length} lessons -{" "}
						{data.duration.hr
							? `${data.duration.hr}hr ${data.duration.mn}mn`
							: `${data.duration.mn}mn`}
					</span>
				</div>
			</div>
			<div className="bottom">
				{data.lessons.map((l, j) => (
					<div className="lessons" key={j}>
						<div className="left">
							<h4>{j + 1 < 10 ? `0${j + 1}` : j + 1}</h4>
							<p>{l.name}</p>
						</div>
						<div className="right">
							{l.isFree && <span>free</span>}
							<h6>
								{l.duration.hr
									? `${l.duration.hr}hr ${l.duration.mn}mn`
									: `${l.duration.mn}mn`}
							</h6>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LessonsCard;
