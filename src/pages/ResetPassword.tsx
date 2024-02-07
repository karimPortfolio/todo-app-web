import React, { useEffect } from 'react'
import { Brand } from '../components/Brand'
import { Typographie } from '../components/Typographie'
import { Form } from '../components/Form'
import { useAppDispatch } from '../redux/store'
import { fetchResetPassword } from '../redux/api/resetPasswordThunk'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


interface State {
    resetPassword: {
        loading: boolean,
        result: {
          type: string | null,
          message: string | null
        },
        error: string
    }
}

const ResetPassword = () => {

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const result = useSelector( (state: State) => state.resetPassword );

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const dispatch = useAppDispatch();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value);
  }


  const handleClick = () => {
    setLoading(true);
    const body = {
        password,
        passwordConfirm: confirmPassword,
        token:token
    }

    setTimeout( () => {
        dispatch(fetchResetPassword(body));
        setPassword('');
        setConfirmPassword('');
        setLoading(result.loading);
    },4000)
  }

  useEffect( () => {
        const redirectToMobileApp = () => {
            setTimeout( () => {
                window.location.href = 'DailyTasks://Signin';
            },5000);
        }

        if (result.result && result.result.type && result.result.type === 'success')
        {
            redirectToMobileApp();
        }

  },[result]);


  const inputs = [
    {id:'password', type:'password', name: 'password', value:password, handleChange: handlePasswordChange, text:'Password', placeholder:'New password'},
    {id:'confirmPassword', type:'password', name: 'confirmPassword', value:confirmPassword, handleChange: handleConfirmPasswordChange, text:'Confirm password', placeholder:'Confirm new password'},
    {id:'token', type:'hidden', name: 'token', value:token || '', text:'', placeholder:''},
  ];


  return (
    <div>
        <section className='pt-7 sm:pt-16 pb-4 sm:pb-6'>
            <Brand />
        </section>

        <section className='sm:pb-6'>
            <Typographie />
        </section>

        <section
        className='flex justify-center items-center w-full pt-16 sm:pt-20'
        >
            <Form
            inputs={inputs}
            handleClick={handleClick}
            loading={loading}
            result={result.result}
            />
        </section>
    </div>
  )
}

export default ResetPassword