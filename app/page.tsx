import Link from "next/link";

export default function Home() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="w-full max-w-[600px] gap-4">
				<h1 className="text-6xl">
					The Greatest Journal App IN THE WORLD
				</h1>
				<p className="text-2xl text-black/60">
					This is the best app for tracking your mood. All you have to
					do is be honest.
				</p>
				<Link href="/journal">
					<button className="rounded-md px-4 py-2 bg-slate-700 text-white text-xl">
						Get Started
					</button>
				</Link>
			</div>
		</div>
	);
}
