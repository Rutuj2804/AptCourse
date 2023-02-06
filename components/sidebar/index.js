import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsListNested } from "react-icons/bs";
import { MdCreate, MdClose, MdMenu, MdLogout, MdShare } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/settings";
import SecondaryButton from "../button/secondary"

const Sidebar = ({ open }) => {
	const dispatch = useDispatch();
	const router = useRouter()

	return (
		<div className="parent__Wrapper">
			<div
				className={open ? "sidebar__Wrapper" : "sidebar__Wrapper translate"}
			>
				<div className="navlinks">
					<div className="close">
						<IconButton onClick={() => dispatch(toggleSidebar())}>
							<MdClose />
						</IconButton>
					</div>
					{!open && <div className="open">
						<button onClick={() => dispatch(toggleSidebar())}>
							<MdMenu />
						</button>
					</div>}
					<div className="block">
						<h6>Menu</h6>
						<ul>
							<li onClick={()=>router.push("/")} className={router.pathname === "/"? "active": ""}>
								<AiFillHome /> Home
							</li>
							<li onClick={()=>router.push("/search")} className={router.pathname === "/search"? "active": ""}>
								<AiOutlineSearch /> Find Courses
							</li>
							<li onClick={()=>router.push("/course/my")} className={router.pathname === "/course/my"? "active": ""}>
								<BsListNested /> My Courses
							</li>
							<li onClick={()=>router.push("/course/create")} className={router.pathname === "/course/create"? "active": ""}>
								<MdCreate /> Create Courses
							</li>
						</ul>
					</div>
				</div>
				<div className="buttons">
					<SecondaryButton startIcon={<MdLogout />}>Logout</SecondaryButton>
					<SecondaryButton startIcon={<MdShare/>}>Invite</SecondaryButton>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
