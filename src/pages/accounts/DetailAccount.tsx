import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import api from './../../api/accounts';
import DetailCard from './DetailCard';

const ContainerDetail = styled.section`
	width: 100%;
	background: #e6edf7;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 49px);

	article {
		width: 80%;
		background: white;
		margin-top: 20px;
		margin-bottom: 20px;

		label {
			margin-left: 10px;
			color: grey;
		}
		div {
			margin: 10px;
		}
	}

	section {
		width: 80%;
		align-items: center;
	}

	article:nth-child(1) {
		text-align: center;
	}
`;
const DetailAccount = () => {
	const [detailAccount, setDetailAccount] = useState([]);
	const [loading, setLoading] = useState(true);

	const history: any = useHistory();
	const location: any = useLocation();

	const { id, name, balance, type } = location.state.account;

	const readAccountById = async (idAccount: any) => {
		try {
			const response = await api.get(
				`https://indra-a01eo.herokuapp.com/indra-recruitment/api/account-detail?id=${idAccount}`,
			);
			setDetailAccount(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		readAccountById(id);
	}, [id]);

	function helperType(Name: string): string {
		let nameType = '';
		switch (Name) {
			case 'ACCOUNT':
				nameType = 'Saldo disponible';
				break;
			case 'CREDIT_CARD':
				nameType = 'Linea de credito';
				break;
			default:
				nameType = 'No data';
				break;
		}
		return nameType;
	}

	const handleReturn = () => {
		history.push('/accounts');
	};

	return (
		<ContainerDetail>
			<article>
				<p>{name}</p>
				<p>s/.{balance}.00</p>
				<p>{helperType(type)}</p>
			</article>
			<button onClick={handleReturn}>Regresar</button>

			{loading ? (
				<Loader />
			) : (
				<section>
					<p>ULTIMOS MOVIMIENTOS</p>
					{detailAccount?.map((detail: any) => (
						<DetailCard detail={detail} />
					))}
				</section>
			)}
		</ContainerDetail>
	);
};

export default DetailAccount;
