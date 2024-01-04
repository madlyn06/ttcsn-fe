import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { useMutation } from 'react-query'
import { loginApi, registerApi } from 'src/apis/auth.api'
import { AppContext } from 'src/context/app.context'
import Popover from './Popover'
import './header_footer.css'
import './home.css'
import { removeAccessTokenAndProfileFromLS } from 'src/utills/auth'
const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
export default function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalRegisterIsOpen, setRegisterIsOpen] = React.useState(false)
  const { setIsAuthenticated, setProfile, profile, isAuthenticated } = useContext(AppContext)
  const [dataUser, setDataUser] = React.useState({
    email: '',
    password: ''
  })
  const [dataUserRegister, setDataUserRegister] = React.useState({
    email: '',
    username: '',
    password: ''
  })
  function openModal() {
    setIsOpen(true)
  }
  function openModalRegister() {
    setRegisterIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  function closeModalRegister() {
    setRegisterIsOpen(false)
  }

  // call api
  const { data, mutate } = useMutation((body: any) => {
    return loginApi(body)
  })
  const { data: dataRegister, mutate: mutateRegister } = useMutation((body: any) => {
    return registerApi(body)
  })
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value
    })
  }
  const handleOnChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUserRegister({
      ...dataUserRegister,
      [e.target.name]: e.target.value
    })
  }
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(dataUser, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.result.user)
        setIsOpen(false)
      }
    })
  }
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutateRegister(dataUserRegister, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.result.user)
        setRegisterIsOpen(false)
      }
    })
  }
  const handleLogout = () => {
    setIsAuthenticated(false)
    setProfile(null)
    removeAccessTokenAndProfileFromLS()
  }
  // html
  return (
    <header>
      <div className='logo'>
        <Link to={'/'}>
          <img
            src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/01/logo_nosub.svg'
            alt=''
            className='w-full h-[50px] object-contain'
          />
        </Link>
      </div>
      <div className='menu flex gap-3'>
        <ul className='ul_menu flex gap-4 justify-center items-center m-0'>
          <Link to='/' className='li_menu hover:text-[#ffc43b] text-sm'>
            Trang chủ
          </Link>
          <Link to='/ve-noi-dia' className='li_menu hover:text-[#ffc43b] text-sm'>
            Vé nội địa
          </Link>
          <Link to='/thong-tin-hang' className='li_menu hover:text-[#ffc43b] text-sm'>
            Thông tin hãng
          </Link>
          <Link to='/tin-tuc' className='li_menu hover:text-[#ffc43b] text-sm'>
            Tin tức
          </Link>
        </ul>
        {isAuthenticated ? (
          <Popover
            renderPopover={
              <div className='relative rounded-sm border border-gray-200 px-4 py-2 bg-white shadow-md'>
                <button
                  onClick={() => handleLogout()}
                  className='block w-full text-sm bg-white  text-left hover:bg-slate-100 hover:text-cyan-500'
                >
                  Đăng xuất
                </button>
                <button>Vé của tôi</button>
              </div>
            }
          >
            <div className='text-base'>Xin chào: {profile?.username}</div>
          </Popover>
        ) : (
          <div className='flex gap-3 text-base'>
            <button className='px-3 py-2 bg-blue-400 rounded-lg text-sm' onClick={openModal}>
              Đăng nhập
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Example Modal'>
              <div>
                <h1 className='text-2xl font-semibold '>Đăng nhập</h1>
                <form className='flex flex-col' onSubmit={handleLogin}>
                  <input
                    type='text'
                    className='w-[500px] border focus:border-blue-500 focus:border rounded-md px-3 py-2 mb-4'
                    placeholder='Username'
                    name='email'
                    onChange={handleOnChange}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={handleOnChange}
                    name='password'
                    className='border focus:border-blue-500 focus:border rounded-md px-3 py-2 mb-4'
                  />
                  <button className='px-2 py-2 text-white bg-blue-400 rounded-lg'>Đăng nhập</button>
                </form>
              </div>
            </Modal>
            <button className='px-3 text-sm py-2 border border-blue-400 rounded-lg' onClick={openModalRegister}>
              Đăng ký
            </button>
            <Modal
              isOpen={modalRegisterIsOpen}
              onRequestClose={closeModalRegister}
              style={customStyles}
              contentLabel='Example Modal'
            >
              <div>
                <h1 className='text-2xl font-semibold'>Đăng ký</h1>
                <form action='' className='flex flex-col' onSubmit={handleRegister}>
                  <input
                    type='text'
                    className='w-[500px] border focus:border-blue-500 focus:border rounded-md px-3 py-2 mb-4'
                    placeholder='Username'
                    onChange={handleOnChangeRegister}
                    name='username'
                  />
                  <input
                    type='text'
                    className='w-[500px] border focus:border-blue-500 focus:border rounded-md px-3 py-2 mb-4'
                    placeholder='Email'
                    onChange={handleOnChangeRegister}
                    name='email'
                  />
                  <input
                    type='text'
                    placeholder='Password'
                    className='border focus:border-blue-500 focus:border rounded-md px-3 py-2 mb-4'
                    onChange={handleOnChangeRegister}
                    name='password'
                  />
                  <button className='px-2 py-2 text-white bg-blue-400 rounded-lg'>Đăng ký</button>
                </form>
              </div>
            </Modal>
          </div>
        )}
      </div>
      <div className='contact'>
        <div className='icon_contact'>
          <i style={{ color: '#ffc43b', fontSize: '3rem' }} className='fas fa-phone-square-alt' />
        </div>
        <div className='hotline cursor-pointer'>
          <span>Hotline tư vẫn toàn quốc</span>
          <span className=' text-base'>1900 4798</span>
        </div>
      </div>
    </header>
  )
}
