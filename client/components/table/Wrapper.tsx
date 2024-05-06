import React from "react";

export default function Wrapper({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<div className="max-w-4xl w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div className="flex flex-col">
				<div className="-m-1.5 overflow-x-auto">
					<div className="p-1.5 min-w-full inline-block align-middle">
						<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
