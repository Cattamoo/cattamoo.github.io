import PageLayout from "../components/layouts/PageLayout";
import Typewriter from 'typewriter-effect';
import {BiChevronsDown} from "react-icons/bi";

export default function Main() {
	return (
		<PageLayout>
			<h1 className="absolute top-1/2 -translate-y-2/4 text-[3rem] font-bold text-center text-black md:text-[5rem]">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString('Front-end Developer<br>이예진 입니다.')
							.start()
						;
					}}
				/>
			</h1>
			<div className="absolute top-2/3 text-center text-black/25">
				<span className="font-bold">Scroll</span>
				<BiChevronsDown className="text-5xl mt-2 animate-bounce" />
			</div>
		</PageLayout>
	);
}