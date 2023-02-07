import Image from "next/image";
import React from "react";
import CourseOne from "../../assets/course1.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";

const CourseCard = ({ isSaved, progress }) => {
	const router = useRouter();
	return (
		<div className="coursecard" onClick={() => router.push("/course")}>
			<div className="image">
				<Image src={CourseOne} alt="course" />
			</div>
			<div className="details">
				<h6>Web Development By Rutuj Bokade</h6>
				<p>
					A premium web development course for ReactJS and NodeJS.
				</p>
				<span className="tags isGreen">Free</span>
				<span className="registration">2.5k+ Students</span>
				{!progress ? <div className="save">
					{isSaved ? <span><AiFillHeart/></span>:<span><AiOutlineHeart/></span>}
				</div> :
				<div className="progress__bar">
					<div className="bar">
						<div className="color" style={{ width: `${progress}%` }}></div>
					</div>
					<span>{progress}%</span>
				</div>}
			</div>
		</div>
	);
};

export default CourseCard;
