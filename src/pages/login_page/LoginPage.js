import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./../../components/ui/input/Input";
import LoginText from "./../../components/ui/login_text/LoginText";
import styles from "./LoginPage.module.scss"
import EnterBtn from "./../../components/ui/allBtns/enter.btn/EnterBtn";
import TextBtn from './../../components/ui/allBtns/text.btn/TextBtn';
import EnterpriseBtn from "./../../components/ui/allBtns/empresa.btn/EnterpriseBtn";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const senhaTeste = '123456';
    const emailTeste = 'thiagostopla@gmail.com'

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const validateEmail = () => {
        if (!email.includes('@')) {
            setEmailError('Email inválido');
        } else if (email !== emailTeste) {
            setEmailError('Email não corresponde ao cadastro.');
        } else {
            setEmailError('');
            alert('Email correto!');
        }
    };

    const validateSenha = () => {
        if (senha.length < 6) {
            setSenhaError('A senha deve ter pelo menos 6 caracteres.');
        } else if (senha !== senhaTeste) {
            setSenhaError('Senha incorreta.');
        } else {
            setSenhaError('');
            alert('Senha correta!');
        }
    };
    return <>
        <div className={styles.bodylogin}>
            <LoginText texto="Login!" />
            <Input
                placeholder="Usuário"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                error={emailError} />
            <Input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                onBlur={validateSenha}
                error={senhaError}
            />
            <EnterBtn texto="Entrar" />
            <EnterpriseBtn icon={faCircleUser} />
            <TextBtn texto="Criar contaaaa" />



            <div id='teste'></div>
        </div>
    </>
}

export default LoginPage