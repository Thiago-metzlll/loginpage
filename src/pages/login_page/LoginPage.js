import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./../../components/ui/input/Input";
import LoginText from "./../../components/ui/login_text/LoginText";
import styles from "./LoginPage.module.scss"
import EnterBtn from "./../../components/ui/allBtns/enter.btn/EnterBtn";
import TextBtn from './../../components/ui/allBtns/text.btn/TextBtn';
import EnterpriseBtn from "./../../components/ui/allBtns/empresa.btn/EnterpriseBtn";
import { useState } from "react";
import { useAuth } from "./../../../src/context/AuthContext"
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const navigate = useNavigate();

    const senhaTeste = '123456';
    const emailTeste = 'thiagostopla@gmail.com'

    

    const { login } = useAuth()

    const handleLogin = () => {
        let valid = true;

        if (!email.includes('@')) {
            setEmailError('Email inválido');
            valid = false;
        } else if (email !== emailTeste) {
            setEmailError('Email não corresponde ao cadastro.');
            valid = false;
        } else {
            setEmailError('');
        }

        if (senha.length < 6) {
            setSenhaError('A senha deve ter pelo menos 6 caracteres.');
            valid = false;
        } else if (senha !== senhaTeste) {
            setSenhaError('Senha incorreta.');
            valid = false;
        } else {
            setSenhaError('');
        }

        if (valid) {
            login();
            navigate('/home');
        }
    };
    return <>
        <div className={styles.bodylogin}>
            <LoginText texto="Login!" />
            <Input
                placeholder="Usuário"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={emailError} />
            <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
            />
                  {senhaError && <p style={{ color: 'red' }}>{senhaError}</p>}

            <EnterBtn texto="Entrar" onClick={handleLogin} />
            <EnterpriseBtn icon={faCircleUser} />
            <TextBtn texto="Criar contaaaa" />



            <div id='teste'></div>
        </div>
    </>
}

export default LoginPage