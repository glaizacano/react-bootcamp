import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	const authorAvatar = faker.image.image();
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.image()}
					author="Alex"
					date="Today at 5:00"
					content="Great blog post!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.image()}
					author="Sam"
					date="Today at 7:51"
					content="Informative. Thanks!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.image()}
					author="Jane"
					date="Today at 9:01"
					content="Looks great!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
