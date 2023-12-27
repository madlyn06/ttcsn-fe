import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'
import { createTicket, updateTicket } from 'src/apis/ticket.api'

export default function AddTicket() {
  const location = useLocation()
  const [body, setBody] = useState({
    departure: '',
    destination: '',
    departure_time: '',
    destination_time: '',
    price: '',
    date: 0
  })
  const isUpdate = location.pathname.includes('update')
  const { mutate } = useMutation({
    mutationFn: (body: any) => {
      return createTicket(body)
    },
    onSuccess: (data) => {}
  })
  // update
  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (body: any) => {
      return updateTicket(body, location.state.id)
    },
    onSuccess: (data) => {}
  })
  const handleAddTicket = () => {
    if (!isUpdate) mutate(body)
    else mutateUpdate(body)
    setBody({
      departure: '',
      destination: '',
      price: '' as any,
      departure_time: '',
      destination_time: '',
      date: 0
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
      <h4>{isUpdate ? 'Cập nhật' : 'Thêm'} vé máy bay</h4>
      <div>
        <form action='' className='flex flex-col gap-2'>
          <input
            name='departure'
            type='text'
            value={body.departure}
            placeholder='Điểm đi'
            className='py-2 px-3 rounded-md'
            onChange={handleOnChange}
          />
          <input
            name='destination'
            type='text'
            value={body.destination}
            placeholder='Điểm đến'
            className='py-2 px-3 rounded-md'
            onChange={handleOnChange}
          />
          <input
            name='departure_time'
            type='string'
            value={body.departure_time}
            placeholder='Giờ đi'
            className='py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onChange={handleOnChange}
          />
          <input
            name='destination_time'
            type='string'
            value={body.destination_time}
            placeholder='Giờ đến'
            className='py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onChange={handleOnChange}
          />
          <input
            name='date'
            type='date'
            value={body.date}
            placeholder='Ngày đi'
            className='py-2 px-3 rounded-md'
            onChange={handleOnChange}
          />
          <input
            name='price'
            type='text'
            value={body.price}
            placeholder='Giá tiền'
            className='py-2 px-3 rounded-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            onChange={handleOnChange}
          />
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
