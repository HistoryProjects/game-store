import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            if(user){
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/');
            }
            
            
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message
            console.log(errorCode, errorMessage);
        }

    }
    return (
        <div className="w-full h-auto bg-pageBg pt-5">
            <Header />

            <div className="w-10/12 mx-auto mb-60 mt-20 py-10">
                <form 
                    onSubmit={onSubmit}
                    className="w-4/12 border-4 border-orng p-4 mx-auto text-white"
                >
                    <h1 className="text-center text-white text-2xl font-bold mb-10">Вход</h1>

                   <div>
                        <label for="mail">Email</label><br />
                        <input 
                            id="mail" 
                            type="email" 
                            placeholder='E-mail' 
                            required
                            className="w-full p-3 text-white bg-transparent border-2 border-orng"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        /><br /><br />

                        <label for="password">Пароль</label><br />
                        <input 
                            id="password" 
                            type="password"
                            placeholder='Password'
                            required
                            className="w-full p-3 text-white bg-transparent border-2 border-orng" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />

                        <button type='submit' className='w-full text-lg font-bold py-3 mt-8 bg-orng'>
                            Вход
                        </button>

                        <div className="text-center mt-5 mx-auto">
                            Нет аккаунта? <Link to='/register' className="text-orng underline">Зарегистрироваться</Link>
                        </div>
                   </div>
                    
                </form>

            </div>

            <Footer />
        </div>
    )
}

export default SignIn;