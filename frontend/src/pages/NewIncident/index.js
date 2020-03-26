import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        console.log(value)

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');

        } catch (error) {
            alert(`Erro no cadastro: ${error}`);
        }
    }

    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo" />

                    <h1>Cadastro</h1>
                    <p>Faça aqui o cadastro do seu caso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>

                <form action="" onSubmit={handleIncident}>
                    <input
                        placeholder="Titulo"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div >
    )
}