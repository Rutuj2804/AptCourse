import Head from "next/head";
import React from "react";
import LinksCard from "../../components/card/LinksCard";
import VideoPlayer from "../../components/player/VideoPlayer";
import SecondaryButton from "../../components/button/secondary";
import PrimaryButton from "../../components/button/primary";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

const lessonsData = [
	{
		name: "Introduction",
		text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
	},
	{
		name: "Significance",
		text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
	},
	{
		name: "Drawbacks",
		text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
	},
];

const Watch = () => {
	return (
		<section className="watch__ContainerWrapper">
			<Head>
				<title>Lesson</title>
			</Head>
			<VideoPlayer>
				<div className="container">
					<div className="title__and__description">
						<div className="row">
							<div className="col-lg-6 col-md-8 col-12">
								<p>03.</p>
								<h4>
									What is ReactJS and NextJS<br></br>& why use it?
								</h4>
								<h6>
									Difficulty <span>Easy</span>
								</h6>
							</div>
						</div>
					</div>

					<div className="lessons__data">
						{lessonsData.map((v, i) => (
							<div key={i}>
								<h4>{v.name}</h4>
								<p>{v.text}</p>
							</div>
						))}
					</div>
					<div className="next__prev">
						<SecondaryButton startIcon={<MdKeyboardArrowLeft />}>
							Prev Lesson
						</SecondaryButton>
						<PrimaryButton startIcon={<FaDiscord />}>
							Join Discord
						</PrimaryButton>
						<SecondaryButton endIcon={<MdKeyboardArrowRight />}>
							Next Lesson
						</SecondaryButton>
					</div>
				</div>
			</VideoPlayer>
			<LinksCard />
		</section>
	);
};

export default Watch;
