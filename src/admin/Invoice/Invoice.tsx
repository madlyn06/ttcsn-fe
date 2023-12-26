import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { confirmTicket, getAllTicket } from 'src/apis/ticket.api'
import { formatDate } from 'src/utills/date'

function Invoice() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['invoice'],
    queryFn: getAllTicket
  })
  console.log(data)
  //   const navigate = useNavigate()
  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => {
      return confirmTicket(id)
    },
    onSuccess: (data) => {}
  })

  const handleConfirm = async (id: string) => {
    await mutateAsync(id)
    await refetch()
  }
  return (
    <div>
      <div className='flex justify-between mx-10  border-b-2'>
        <h1 className='text-xl font-bold'>Vé máy bay</h1>
        <p className='pl-2 pr-8 pt-2 text-[#989d9f] bg-white'>Trang chủ / Sản phẩm</p>
      </div>

      <div>
        <ul className='grid grid-cols-7'>
          <li className='col-span-1'>Username</li>
          <li className='col-span-1'>Email</li>
          <li className='col-span-1'>Điểm đi</li>
          <li className='col-span-1'>Điểm đến</li>
          <li className='col-span-1'>Ngày bay</li>
          <li className='col-span-1'>Trạng thái</li>
          <li className='col-span-1'>Hành động</li>
        </ul>
        {data?.data?.result.map((item: any, index: any) => (
          <ul className='grid grid-cols-7 items-center mt-4' key={index}>
            <li className='col-span-1'>{item.users[0].username}</li>
            <li className='col-span-1'>{item.users[0].email}</li>
            <li className='col-span-1'>{item.tickets[0].departure}</li>
            <li className='col-span-1'>{item.tickets[0].destination}</li>
            <li className='col-span-1'>{item.status ? 'Đã xác nhận' : 'Chưa xác nhận'}</li>
            <li className='col-span-1'>{formatDate(item.tickets[0].date)}</li>
            <li className='col-span-1 flex gap-2'>
              <button onClick={() => handleConfirm(item._id)} className='px-3 py-2 bg-yellow-400 rounded-md text-white'>
                Xác nhận
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Invoice
