import Row, { type RowType } from "./Row";

const COLUMNS: string[] = ["Name", "Email", "RollNO", "Branch"];

export default function Table({ rows }: { rows: RowType[] }) {
	return (
		<table className="min-w-full divide-y divide-gray-200">
			<thead className="bg-gray-50">
				<tr>
					{COLUMNS.map((title, index) => (
						<th
							key={index}
							scope="col"
							className="px-6 py-3 text-start"
						>
							<div className="flex items-center gap-x-2">
								<span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
									{title}
								</span>
							</div>
						</th>
					))}
				</tr>
			</thead>
			<tbody className="divide-y divide-gray-200">
				{rows.map((row, index) => (
					<Row key={index} {...row} />
				))}
			</tbody>
		</table>
	);
}
