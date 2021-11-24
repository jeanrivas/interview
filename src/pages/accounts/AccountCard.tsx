import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SectionAccount = styled.section`
	display: flex;
	justify-content: space-between;

	a {
		text-decoration: none;
	}
	div:nth-child(1) {
		span {
			color: #5fc5f1;
			cursor: pointer;
		}
	}
	div:nth-child(2) {
		p {
			color: grey;
		}

		span {
			display: block;
			text-align: right;
		}
	}
`;

function helperName(name: string): string {
	let nameType = '';
	switch (name) {
		case 'CUENTA SUELDO':
			nameType = 'Cuenta Sueldo';
			break;
		case 'CUENTA FÁCIL':
			nameType = 'Cuenta Fácil';
			break;
		case 'CUENTA GANADORA':
			nameType = 'Cuenta Ganadora';
			break;
		case 'CUENTA INDEPENDENCIA':
			nameType = 'Cuenta Independencia';
			break;
		case 'VISA CERO':
			nameType = 'Visa Cero';
			break;
		case 'VISA PUNTOS':
			nameType = 'Visa Puntos';
			break;
		case 'MASTERCARD PUNTOS':
			nameType = 'Mastercard Puntos';
			break;
		case 'CUOTA FIJA':
			nameType = 'Cuota Fija';
			break;
		case 'VISA PLATINUM PUNTOS':
			nameType = 'Visa Platinum Puntos';
			break;
		default:
			nameType = 'No data';
			break;
	}
	return nameType;
}

function helperType(name: string): string {
	let nameType = '';
	switch (name) {
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

const AccountCard = ({ account }: any) => {
	return (
		<>
			<SectionAccount key={account.id}>
				<div>
					<Link to={{ pathname: `/detail`, state: { account } }}>
						<span>{helperName(account.name)}</span>
					</Link>
					<p>*{account?.number?.substring(6)}</p>
				</div>
				<div>
					<span>s/.{account.balance}</span>
					<p>{helperType(account.type)}</p>
				</div>
			</SectionAccount>
		</>
	);
};

export default AccountCard;
