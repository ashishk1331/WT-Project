export default function Footer({ count }: {count: number}) {
	return (
		<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
			<div>
				<p className="text-sm text-gray-600">
					<span className="font-semibold text-gray-800">{count}</span>{" "}
					results
				</p>
			</div>
		</div>
	);
}
