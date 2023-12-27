import React from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { deleteTicket, fetchTicket } from 'src/apis/ticket.api'
import { formatDate } from 'src/utills/date'

function Ticket() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['ticket'],
    queryFn: fetchTicket
  })
  const navigate = useNavigate()
  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => {
      return deleteTicket(id)
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
          onClick={() => navigate('/admin/ticket/add')}
          className='px-3 py-2 bg-blue-400 text-white rounded-lg mx-10 mb-4'
        >
          Thêm vé bay
        </button>
      </div>
      <div>
        <ul className='grid grid-cols-7'>
          <li className='col-span-1'>Điểm đi</li>
          <li className='col-span-1'>Điểm đến</li>
          <li className='col-span-1'>Ngày đi</li>
          <li className='col-span-1'>Giá vé</li>
          <li className='col-span-1'>Giờ đi</li>
          <li className='col-span-1'>Giờ đến</li>
          <li className='col-span-1'>Hành động</li>
        </ul>
        {data?.data?.result.map((item: any, index: any) => (
          <ul className='grid grid-cols-7 items-center mt-4' key={index}>
            <li className='col-span-1 text-sm'>{item.departure}</li>
            <li className='col-span-1 text-sm'>{item.destination}</li>
            <li className='col-span-1 text-sm'>{formatDate(item.date)}</li>
            <li className='col-span-1 text-sm'>{item.price}</li>
            <li className='col-span-1 text-sm'>{item.departure_time}</li>
            <li className='col-span-1 text-sm'>{item.destination_time}</li>
            <li className='col-span-1 flex gap-2 text-sm'>
              <button
                onClick={() => navigate(`/admin/ticket/update/${item._id}`, { state: { id: item._id } })}
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

export default Ticket
