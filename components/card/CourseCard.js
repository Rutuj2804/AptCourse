import Image from "next/image";
import React from "react";
import CourseOne from "../../assets/course1.jpg";
import PrimaryButton from "../button/primary";
import { BiRupee } from "react-icons/bi";
import { useRouter } from "next/router";

const CourseCard = () => {
	const router = useRouter();

	return (
		<div className="coursecard" onClick={() => router.push("/course")}>
			<div className="image">
				<Image src={CourseOne} alt="course" />
			</div>
			<div className="details">
				<h6>Web Development By Rutuj Bokade</h6>
				<p>
					A premium web development course covering ReactJS and NodeJS
				</p>
				<PrimaryButton startIcon={<BiRupee />}>199/-</PrimaryButton>
			</div>
		</div>
	);
};

export default CourseCard;
