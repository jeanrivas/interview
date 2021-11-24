import React from 'react';
import styled from 'styled-components';
import gifloader from '../assets/Loader.gif';

const Loading = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: white;
	opacity: 0.9;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999;
`;

const Loader = () => {
	return (
		<Loading>
			<img src={gifloader} alt="Loading..."></img>
			<p>Cargando . . .</p>
		</Loading>
	);
};

export default Loader;
