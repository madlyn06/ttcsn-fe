import React, { useContext } from 'react'
import './info.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { formatDate } from 'src/utills/date'
function Info() {
  const location = useLocation()
  const { state } = location
  const navigate = useNavigate()
  return (
    <div className='nen'>
      <div className='thongtin'>
        <div className='tieude'>
          <svg fill='#007295' xmlns='http://www.w3.org/2000/svg' height={16} width={16} viewBox='0 0 512 512'>
            <path d='M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z' />
          </svg>
          <h3>Thông tin liên hệ</h3>
        </div>
        <div className='ten'>
          <div className='quydanh'>
            <p>Quý danh *</p>
            <select>
              <option value='#'>Anh</option>
              <option value='#'>Chị</option>
              <option value='#'>Ông</option>
              <option value='#'>Bà</option>
            </select>
          </div>
          <div className='hovaten'>
            <p>Họ và Tên *</p>
            <input type='text' />
          </div>
        </div>
        <div className='dt'>
          <p>Số điện thoại *</p>
          <input type='text' />
        </div>
        <div className='yc'>
          <p>Yêu cầu đặc biệt</p>
          <input type='text' />
        </div>
        <div className='tt'>
          <button onClick={() => navigate('/pay', { state: { item: state?.item } })}>Tiếp tục</button>
        </div>
      </div>
      <div className='chi-tiet-ve'>
        <div className='tieude'>
          <svg fill='#007295' xmlns='http://www.w3.org/2000/svg' height={16} width={20} viewBox='0 0 640 512'>
            <path d='M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z' />
          </svg>
          <h3>Vé của bạn</h3>
        </div>
        <span>Booking ID: </span> <span>{state?.item._id}</span> <br /> <br />
        <div className='chitiet'>
          <div style={{ marginTop: 10 }}>
            <span style={{ color: 'blue' }}>{state?.item.departure}</span> <span> đến </span>{' '}
            <span style={{ color: 'blue' }}>{state?.item.destination}</span>
            <p>Vietjet Air</p>
            <span>{state?.item.departure_time}</span>
            <span>, </span>
            <span>{formatDate(state?.item.date)}</span>
          </div>
        </div>
        <div className='tongtien'>
          <h4>Tổng tiền</h4>
          <span>{state?.item.price}</span>
          <span> VND</span>
        </div>
      </div>
    </div>
  )
}

export default Info
