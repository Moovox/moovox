import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sair() {
    const navigate = useNavigate();
    useEffect(() => {
        // Aqui você pode limpar tokens, estados, etc.
        navigate('/');
    }, [navigate]);
    return null;
}

export default Sair;
