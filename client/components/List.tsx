import Table from "./table/Table";
import Header from "./table/Header";
import Footer from "./table/Footer";
import Wrapper from "./table/Wrapper";
import { type RowType } from "./Row";

const ROWS: RowType[] = [
	{
		name: "Ashish Khare",
		email: "ashish.21218@knit.ac.in",
		rollno: 21218,
		branch: "Computer Science and Engineering",
	},
	{
		name: "Annany Vishwakarma",
		email: "annany.21211@knit.ac.in",
		rollno: 21211,
		branch: "Computer Science and Engineering",
	},
	{
		name: "Akshat Goel",
		email: "akshat.21209@knit.ac.in",
		rollno: 21209,
		branch: "Computer Science and Engineering",
	},
	{
		name: "Yash Saraswat",
		email: "yash.21266@knit.ac.in",
		rollno: 21266,
		branch: "Computer Science and Engineering",
	},
];

export default function List() {
	return (
		<Wrapper>
			<Header />
			<Table rows={ROWS}/>
			<Footer count={ROWS.length}/>
		</Wrapper>
	);
}
