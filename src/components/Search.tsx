import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { TicketSearch, searchTicket } from 'src/apis/ticket.api'
import { AppContext } from 'src/context/app.context'

function Search() {
  const navigate = useNavigate()
  const { setTicket } = useContext(AppContext)
  const [dataShow, setDataShow] = useState()
  const [body, setBody] = useState({
    departure: '',
    destination: '',
    date: 0
  })

  const { mutate, data } = useMutation({
    mutationFn: (body: TicketSearch) => searchTicket(body),
    onSuccess: (data) => {
      setTicket(data.data.result)
      navigate('/booking', { state: dataShow })
    }
  })
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'date') {
      setBody({
        ...body,
        [e.target.name]: new Date(e.target.value).getTime()
      })
    } else {
      setBody({
        ...body,
        [e.target.name]: e.target.value
      })
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(body)
    mutate(body)
  }
  return (
    <div className='bg-[#fbf9f2] h-[110px] py-5'>
      <div className='mx-auto max-w-7xl px-4'>
        <div>
          <form className=' mx-auto flex justify-around' onSubmit={handleSubmit}>
            <div className='mb-5'>
              <label className='block mb-2 text-sm font-medium text-gray-900'>Điểm đi</label>
              <input
                type='text'
                name='departure'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                placeholder='Hà Nội'
                onChange={handleOnChange}
                required
              />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-sm font-medium text-gray-900'>Điểm đến</label>
              <input
                type='text'
                placeholder='Sài Gòn'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
                onChange={handleOnChange}
                name='destination'
              />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-sm font-medium text-gray-900'>Ngày đi</label>
              <input
                type='date'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                required
                onChange={handleOnChange}
                name='date'
              />
            </div>
            <button type='submit'>
              <div className='cursor-pointer'>
                <img
                  src='https://www.vietnamairlinesgiare.vn/wp-content/themes/vietnamairlines/images/find-flight-icon.svg'
                  alt=''
                />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search
