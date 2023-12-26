import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { deleteUser, fetchUser } from 'src/apis/auth.api'

function User() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })
  const navigate = useNavigate()
  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => {
      return deleteUser(id)
    },
    onSuccess: (data) => {}
  })

  const handleDelete = async (id: string) => {
    await mutateAsync(id)
    await refetch()
  }
  return (
    <div>
      <div className='flex justify-between mx-10  border-b-2'>
        <h1 className='text-xl font-bold'>Vé máy bay</h1>
        <p className='pl-2 pr-8 pt-2 text-[#989d9f] bg-white'>Trang chủ / Sản phẩm</p>
      </div>
      <div className='flex justify-end'>
        <button
          onClick={() => navigate('/admin/user/add')}
          className='px-3 py-2 bg-blue-400 text-white rounded-lg mx-10 mb-4'
        >
          Thêm người dùng
        </button>
      </div>
      <div>
        <ul className='grid grid-cols-4'>
          <li className='col-span-1'>Username</li>
          <li className='col-span-1'>Email</li>
          <li className='col-span-1'>Role</li>
          <li className='col-span-1'>Hành động</li>
        </ul>
        {data?.data?.result.map((item: any, index: any) => (
          <ul className='grid grid-cols-4 items-center mt-4' key={index}>
            <li className='col-span-1'>{item.username}</li>
            <li className='col-span-1'>{item.email}</li>
            <li className='col-span-1'>{item.role}</li>
            <li className='col-span-1 flex gap-2'>
              <button
                onClick={() => navigate(`/admin/user/update/${item._id}`, { state: { id: item._id } })}
                className='px-3 py-2 bg-yellow-400 rounded-md text-white'
              >
                Sửa
              </button>
              <button onClick={() => handleDelete(item._id)} className='px-3 py-2 bg-white rounded-md text-gray-900'>
                Xoá
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default User
