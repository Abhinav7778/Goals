import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }// helps write in form

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return <>
  <section className="header">
        <h1>
            <FaSignInAlt />Login
        </h1>
        <p> Login and Start setting Goals </p>
      </section>

      <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input 
                        type="text"
                        className="form-control"
                        id="email"
                        name= 'email' 
                        value={email} 
                        placeholder='Enter your email'
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <input 
                        type="text"
                        className="form-control"
                        id="password"
                        name= 'password' 
                        value={password} 
                        placeholder='Enter your password'
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <button type='Submit' className='btn tbn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
      </>
  
}

export default Login