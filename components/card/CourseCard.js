import Image from "next/image";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";

const CourseCard = ({ isSaved, progress, image, title, description, isFree, registeredStudents, id }) => {
	const router = useRouter();
	return (
		<div className="coursecard">
			<div className="image" onClick={() => router.push(`/course/${id}`)}>
				<Image src={image} alt="course" />
			</div>
			<div className="details">
				<h6 onClick={() => router.push(`/course/${id}`)}>{title}</h6>
				<p onClick={() => router.push(`/course/${id}`)}>
					{description}
				</p>
				<span className={isFree ? "tags isGreen" : "tags"} onClick={() => router.push(`/course/${id}`)}>{isFree? "Free": "Paid"}</span>
				<span className="registration" onClick={() => router.push(`/course/${id}`)}>{registeredStudents} Students</span>
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
