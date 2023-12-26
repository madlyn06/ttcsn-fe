import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'
import { registerApi, updateUser } from 'src/apis/auth.api'

function AddUser() {
  const location = useLocation()
  const [body, setBody] = useState({
    username: '',
    email: '',
    password: '',
    role: '1'
  })
  const isUpdate = location.pathname.includes('update')
  const { mutate } = useMutation({
    mutationFn: (body: { username: string; email: string; password: string; role?: string }) => {
      return registerApi(body)
    },
    onSuccess: (data) => {}
  })
  //   update
  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (body: any) => {
      return updateUser(body, location.state.id)
    },
    onSuccess: (data) => {}
  })
  const handleAddTicket = () => {
    if (!isUpdate) mutate(body)
    else mutateUpdate(body)
    setBody({
      username: '',
      email: '',
      role: '',
      password: ''
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <h4>{isUpdate ? 'Cập nhật' : 'Thêm'} người dùng</h4>
      <div>
        <form action='' className='flex flex-col gap-2'>
          <input
            name='username'
            type='text'
            value={body.username}
            placeholder='Username'
            className='py-2 px-3 rounded-md'
            onChange={handleOnChange}
          />
          <input
            name='email'
            type='text'
            value={body.email}
            placeholder='Email'
            className='py-2 px-3 rounded-md'
            onChange={handleOnChange}
          />
          <input
            name='password'
            type='password'
            value={body.password}
            placeholder='Password'
            className='py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onChange={handleOnChange}
          />
          <select
            name='role'
            id=''
            className='py-2 px-3 rounded-md'
            value={body.role}
            onChange={(e) => setBody({ ...body, role: e.target.value })}
          >
            <option value='1'>Admin</option>
            <option value='2'>User</option>
          </select>
          <button
            type='button'
            onClick={handleAddTicket}
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none'
          >
            Default
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
