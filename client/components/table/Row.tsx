export type RowType = {
	name: string;
	email: string;
	rollno: number;
	branch: string;
};

export default function Row({
	name,
	email,
	rollno,
	branch,
}: RowType) {
	return (
		<tr>
			<td className="size-px whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="text-sm text-gray-600">{name}</span>
				</div>
			</td>
			<td className="size-px whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="text-sm text-gray-600">{email}</span>
				</div>
			</td>
			<td className="size-px whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="text-sm text-gray-600">{rollno}</span>
				</div>
			</td>
			<td className="size-px whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="text-sm text-gray-600">{branch}</span>
				</div>
			</td>
		</tr>
	);
}
