import { useState } from 'react';
import data from '../data.json';
import Card from '../components/Card';
import { BarChart } from 'reaviz';
import grades from './../grades.json';
import { DropdownButton, Dropdown, Table } from 'react-bootstrap';
import { RadialGauge } from 'reaviz';
import tableFormat from './../tableFormat.json';

// TODO: Refactor

const DropdownElement = ({ name, setGroup }) => (
	<Dropdown.Item onClick={(e) => setGroup(e.target.text)}>
		{name}
	</Dropdown.Item>
)

const TablePart = ({ category, data }) => (
	<>
		<tr>
			<td colSpan="2"><center><b>{category}</b></center></td>
		</tr>
		{tableFormat[category].map((e) => (
			<tr key={e}>
				<td>{e}</td>
				<td>{data[e]}</td>
			</tr>
		))}
	</>
)

const Group = ({ width, groupName, groupData }) => {

	// Sizing Tables gives me PTSD.
	// Note to self: Don't use tables again D:
	const paddingWidth = width * 0.1;
	return (
		<>
			<center>
				<h1>{groupName}</h1>
				<h4>{groupData["Chosen Course"]}</h4>

				<RadialGauge
					height={300}
					width={300}
					data={[{ key: 'Proposal Grade', data: groupData["Total Marks"] }]}
					maxValue={25}
				/>
				<br />
			</center>
			<div style={{ paddingLeft: paddingWidth, paddingRight: paddingWidth, alignItems: "center", textAlign: "center" }}>
				<Table responsive="sm" striped bordered hover >
					<col width={width / 2} />
					<col width={width / 2} />
					<thead>
						<tr>
							<th>Item</th>
							<th>Grade</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(tableFormat).map(category => (
							<TablePart key={category} category={category} data={groupData} />
						))}
					</tbody>
				</Table>
			</div>
		</>
	);
}

const GradeCard = ({ cardWidth }) => {
	const [selectedGroup, setSelectedGroup] = useState("Group 1");

	return (
		<>
			<div>
				<DropdownButton className="ml-5" title="Select a Group">
					{Object.keys(grades).map(g => (
						<DropdownElement key={g} setGroup={setSelectedGroup} name={g} />
					))}
				</DropdownButton>

				<br />
				<Group width={cardWidth} groupName={selectedGroup} groupData={grades[selectedGroup]} />
			</div>

			<Card title={"Grades"} className="mx-auto" style={{ width: "fit-content" }}>
				<BarChart
					width={cardWidth}
					height={cardWidth}
					data={data['Grades']}
				/>
				<br />
			</Card>
		</>
	)
}

export default GradeCard;