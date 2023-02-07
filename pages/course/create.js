import Head from "next/head";
import React from "react";
import { BiPlus, BiRupee } from "react-icons/bi"
import { useDispatch } from "react-redux";
import SecondaryButton from "../../components/button/secondary"
import { setLoading, setSuccess } from "../../store/settings";

const CreateCourse = () => {

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(setLoading(true))
		setTimeout(()=>dispatch(setLoading(false)), 3000)
		dispatch(setSuccess("Successfully created a course"))
	}

	return (
		<div className="createCourse">
			<Head>
				<title>Create Course</title>
			</Head>
			<main className="container">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="title">
							<h4>Course Details</h4>
						</div>
						<div className="col-lg-12 col-12">
							<div className="inputDiv">
								<input type="text" required />
								<label>Course Title</label>
							</div>
						</div>
						<div className="col-lg-12 col-12">
							<div className="inputDiv">
								<textarea type="text" required />
								<label>Course Description</label>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="inputDiv">
								<select>
									<option>Free</option>
									<option>Paid</option>
								</select>
								<label className="up">Course Type</label>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="inputDiv">
								<select>
									<option>100</option>
									<option>200</option>
									<option>300</option>
									<option>500</option>
									<option>1000</option>
									<option>1200</option>
									<option>1800</option>
									<option>2000</option>
									<option>2500</option>
									<option>3000</option>
								</select>
								<label className="up">Price (in <BiRupee/>)</label>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="inputDiv">
								<select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>5</option>
									<option>10</option>
									<option>12</option>
									<option>18</option>
									<option>20</option>
									<option>25</option>
									<option>30</option>
								</select>
								<label className="up">Number of chapters</label>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="inputDiv">
								<input type="file" multiple />
								<label className="up">Add your videos</label>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12 mt-4">
							<SecondaryButton startIcon={<BiPlus />} type="submit">Submit</SecondaryButton>
						</div>
					</div>
				</form>
			</main>
		</div>
	);
};

export default CreateCourse;
