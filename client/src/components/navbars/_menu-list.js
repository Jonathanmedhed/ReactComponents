import React, { Fragment } from 'react';
import JumboList from './_jumbo_list';

const List = ({ setPage, setJumbo, type, setOption, bodyRef }) => {
	const select = async (option, option2) => {
		setOption(option);
		if (option === 'pages') {
			setPage(option2);
			window.scrollTo(0, bodyRef.current.offsetTop);
		}
	};

	return (
		<Fragment>
			<div className="hide-sm">
				<JumboList setJumbo={setJumbo} type={type} />
			</div>
		</Fragment>
	);
};
export default List;
