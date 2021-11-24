import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AccountCard from './AccountCard';
import api from './../../api/accounts';
import Loader from './../../components/Loader';
import Error from './../../components/Error';

const ContainerPage = styled.section`
	width: 100%;
	background: #e6edf7;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;

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
	article:nth-child(1) {
		text-align: center;
	}
`;

const Accounts = () => {
	const [accounts, setAccounts] = useState([]);
	const [cards, setCards] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorAPI, seterrorAPI] = useState(false);

	const readAccounts = async () => {
		try {
			const response = await api.get(
				'https://indra-a01eo.herokuapp.com/indra-recruitment/api/accounts',
			);
			const arrayAccounts = response.data.filter((item: any) => item.type === 'ACCOUNT');
			const arrayCards = response.data.filter((item: any) => item.type === 'CREDIT_CARD');

			setAccounts(arrayAccounts);
			setCards(arrayCards);
			setLoading(false);
		} catch (error) {
			console.log(error);
			seterrorAPI(true);
			setLoading(false);
		}
	};
	useEffect(() => {
		readAccounts();
	}, []);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<ContainerPage>
					<article>
						<h1>Hola Jean</h1>
						<h2>Bienvenido</h2>
					</article>

					<article>
						<label>CUENTAS</label>
						{accounts?.map((account: any) => (
							<AccountCard key={account.id} account={account} />
						))}
					</article>
					<article>
						<label>TARJETAS</label>
						{cards?.map((card: any) => (
							<AccountCard key={card.id} account={card} />
						))}
					</article>
				</ContainerPage>
			)}
			{errorAPI ? <Error /> : null}
		</div>
	);
};

export default Accounts;
