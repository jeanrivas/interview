import React from 'react';
import styled from 'styled-components';

const SectionDetail = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		color: #5fc5f1;
	}
`;

const DetailCard = ({ detail }: any) => {
	return (
		<>
			<SectionDetail key={detail.id}>
				<div>
					<p>{detail.dateoperation}</p>
					<span>{detail.description.substring(0, 13)}...</span>
				</div>
				<div>
					<p>s/.{detail.amount}</p>
				</div>
			</SectionDetail>
			<hr />
		</>
	);
};

export default DetailCard;
