import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from "./../ui/input/Input";
import LoginText from "./../ui/LoginText/LoginText";
import styles from './../ui/App.module.scss';
import EnterBtn from "./../ui/allBtns/enter.btn/EnterBtn";
import TextBtn from './../ui/allBtns/text.btn/TextBtn';
import EnterpriseBtn from "./../ui/allBtns/empresa.btn/EnterpriseBtn";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const senhaTeste = '123456'; 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
    };

    const validateEmail = () => {
        if (!email.includes('@')) {
            setEmailError('Email inválido');
        } else {
            setEmailError('');
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
        <div className={styles.center}>
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