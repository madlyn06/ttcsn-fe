import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Admin({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <>
      <header className='bg-[#1c2930] h-14 flex'>
        <div className='w-40 cursor-pointer' onClick={() => navigate('/')}>
          <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/01/logo_nosub.svg' alt='logo-img' />
        </div>
        <div className='text-white mr-20 cursor-pointer mt-4'>Admin</div>
      </header>
      <div className='grid grid-cols-12 gap-3 h-screen'>
        <div className='p-4 col-span-2 bg-[#eee]'>
          <ul className='p-0 m-0'>
            <Link
              to={'/admin/ticket'}
              className='flex gap-8 mt-4 cursor-pointer hover:translate-x-2 transition-all delay-75'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-id='IcProductDuotoneHotelFill'
              >
                <path
                  d='M16 7V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7V6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7Z'
                  fill='#CDD0D1'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2 4V21C2 21.5523 2.44772 22 3 22H6.5V20.75C6.5 20.3358 6.16421 20 5.75 20C5.33579 20 5 19.6642 5 19.25V19C5 18.4477 5.44772 18 6 18H11C11.5523 18 12 18.4477 12 19V19.25C12 19.6642 11.6642 20 11.25 20C10.8358 20 10.5 20.3358 10.5 20.75V22H14H15H21C21.5523 22 22 21.5523 22 21V12C22 10.8954 21.1046 10 20 10H15V4C15 3.44772 14.5523 3 14 3H12.5C12.2061 1.82459 11.15 1 9.93845 1H7.06155C5.84996 1 4.79385 1.82459 4.5 3H3C2.44772 3 2 3.44771 2 4ZM4 6C4 5.44772 4.44772 5 5 5H7C7.55228 5 8 5.44772 8 6V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V6ZM10 5C9.44772 5 9 5.44772 9 6V7C9 7.55228 9.44772 8 10 8H12C12.5523 8 13 7.55228 13 7V6C13 5.44772 12.5523 5 12 5H10ZM9 10C9 9.44772 9.44772 9 10 9H12C12.5523 9 13 9.44771 13 10V11C13 11.5523 12.5523 12 12 12H10C9.44772 12 9 11.5523 9 11V10ZM4 10C4 9.44771 4.44772 9 5 9H7C7.55228 9 8 9.44772 8 10V11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11V10ZM5 13C4.44772 13 4 13.4477 4 14V15C4 15.5523 4.44772 16 5 16H7C7.55228 16 8 15.5523 8 15V14C8 13.4477 7.55228 13 7 13H5ZM10 13C9.44772 13 9 13.4477 9 14V15C9 15.5523 9.44772 16 10 16H12C12.5523 16 13 15.5523 13 15V14C13 13.4477 12.5523 13 12 13H10ZM16 14V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V14C20 14.5523 19.5523 15 19 15H17C16.4477 15 16 14.5523 16 14ZM19 16H17C16.4477 16 16 16.4477 16 17V18C16 18.5523 16.4477 19 17 19H19C19.5523 19 20 18.5523 20 18V17C20 16.4477 19.5523 16 19 16Z'
                  fill='#CDD0D1'
                ></path>
              </svg>
              <p>Vé máy bay</p>
            </Link>
            <Link
              to={'/admin/user'}
              className='flex gap-8 mt-4 cursor-pointer hover:translate-x-2 transition-all delay-75'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-id='IcProductDuotoneFlightFill16'
              >
                <g clipPath='url(#clip0_4978_5190)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12.3067 1.22242C12.9992 0.606863 14.0515 0.637769 14.7067 1.29291C15.3619 1.94804 15.3928 3.00031 14.7774 3.69285L11.6317 7.23229L13.9483 14.1839C14.1067 14.6592 13.889 15.1783 13.4389 15.3984C12.9889 15.6185 12.4455 15.4716 12.1676 15.0548L8.73502 9.9059L6.50032 11.4702V14C6.50032 14.4794 6.16014 14.8914 5.68943 14.982C5.21871 15.0727 4.74987 14.8165 4.57184 14.3714L4.02318 12.9998C3.75754 13.0059 3.49182 12.9064 3.29252 12.7071C3.09332 12.5079 2.99383 12.2424 2.99987 11.9769L1.62893 11.4285C1.18385 11.2505 0.92771 10.7817 1.01836 10.3109C1.10901 9.84022 1.52095 9.50005 2.00032 9.50005H4.52895L6.09375 7.26463L0.944927 3.83212C0.528082 3.55422 0.3812 3.01076 0.601306 2.56072C0.821413 2.11067 1.34057 1.89296 1.81585 2.05138L8.76737 4.36852L12.3067 1.22242Z'
                    fill='#CDD0D1'
                  ></path>
                </g>
                <defs>
                  <clipPath id='clip0_4978_5190'>
                    <rect width='16' height='16' fill='white'></rect>
                  </clipPath>
                </defs>
              </svg>
              <p>Người dùng</p>
            </Link>

            <Link
              to={'/admin/invoice'}
              className='flex gap-8 mt-4 cursor-pointer hover:translate-x-2 transition-all delay-75'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-id='IcProductDuotoneXperienceFill'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.32125 8.49859L9.98962 12.6068L18.1819 2.25861C18.8675 1.39258 20.1254 1.24632 20.9914 1.93193C21.8574 2.61754 22.0037 3.87539 21.3181 4.74143L11.8181 16.7414C11.1071 17.6395 9.78862 17.7581 8.92874 17.0014L2.67874 11.5014C1.84952 10.7717 1.76886 9.50798 2.49857 8.67876C3.22828 7.84955 4.49204 7.76888 5.32125 8.49859ZM4.72017 18.9617L6.81535 16.4737L8.26811 17.7522C8.86424 18.2768 9.60732 18.5209 10.3395 18.4987L7.77982 21.5383C7.06832 22.3832 5.80662 22.4913 4.96172 21.7798C4.11683 21.0683 4.00868 19.8066 4.72017 18.9617ZM12.6021 17.3621C12.1498 17.9334 11.5336 18.2945 10.8755 18.4342L15.57 21.8648C16.4618 22.5165 17.7131 22.3219 18.3648 21.4301C19.0165 20.5382 18.8218 19.287 17.93 18.6352L13.9163 15.7021L12.6021 17.3621Z'
                  fill='#CDD0D1'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7 6C7 8 10 10 10 10C10 10 13 8 13 6C13 4 11.5 3 10 3C8.5 3 7 4 7 6ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z'
                  fill='#CDD0D1'
                ></path>
              </svg>
              <p>Quản lý hoá đơn</p>
            </Link>
          </ul>
        </div>
        <div className='p-4 col-span-10 bg-[#eee]'>{children}</div>
      </div>
    </>
  )
}
