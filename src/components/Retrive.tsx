import React from 'react'
import { useQuery } from 'react-query'
import { getAllMyTicket } from 'src/apis/ticket.api'
import { formatDate } from 'src/utills/date'

function Retrive() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['retrive'],
    queryFn: getAllMyTicket
  })
  console.log(data)
  return (
    <div className='mx-auto px-4 mt-8 max-w-[800px]'>
      <div className='mb-2'>
        <div className='flex justify-between'>
          <h1 className='text-[#03121a] font-bold '>Vé của tôi</h1>
          {/* <p className='text-[#0264c8] text-[14px] font-bold'>Xoá tất cả</p> */}
        </div>
        {data?.data.result.map((item: any, index: any) => (
          <div className='p-4 grid bg-white grid-cols-4 mt-4 shadow-xl rounded-md overflow-hidden'>
            <div className='col-span-2 flex gap-3 rounded-md overflow-hidden  pt-2'>
              <div className='text-xs flex flex-col text-center'>
                <span>{item?.ticket[0]?.departure}</span>
                <span>{item?.ticket[0]?.departure_time}</span>
              </div>
              <div className='relative z-0'>
                <span className='absolute text-xs top-[-7px] left-[70px]'>{formatDate(item?.ticket[0]?.date)}</span>
                <img
                  src='https://www.vietnamairlinesgiare.vn/wp-content/themes/vietnamairlines/images/flight-icon.svg'
                  alt=''
                />
                <span className='absolute text-xs top-[17px] left-[70px] z-10'>Bay thẳng</span>
              </div>
              <div className='text-xs flex flex-col text-center'>
                <span>{item?.ticket[0]?.destination}</span>
                <span>{item?.ticket[0]?.destination_time}</span>
              </div>
            </div>
            <div className='col-span-1 flex flex-col items-center gap-3'>
              <div>
                <img src='https://data.vietnambooking.com/flight/icon_airlines/big/logo_VJ.png' alt='' />
              </div>
              <p>Vietjet Air</p>
            </div>
            <div className='col-span-1 flex flex-col items-center justify-end'>
              <p className='text-lg text-[#e5a930] font-semibold'>{item?.ticket[0]?.price} VND</p>
              <p>{item?.status ? 'Đã xác nhận' : 'Chưa xác nhận'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Retrive
