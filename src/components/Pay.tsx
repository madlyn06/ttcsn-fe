import React from 'react'
import './pay.css'
import { useLocation } from 'react-router-dom'
import { formatDate } from 'src/utills/date'
function Pay() {
  const location = useLocation()
  const { state } = location
  return (
    <div className='nen'>
      <div className='thongtin'>
        <div className='tieude'>
          <svg fill='#007295' xmlns='http://www.w3.org/2000/svg' height={16} width={18} viewBox='0 0 576 512'>
            <path d='M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z' />
          </svg>
          <h3>Thanh toán</h3>
        </div>
        <div className='thanhtoan'>
          <h3>Hướng dẫn thanh toán</h3>
          <div className='ttck'>
            <div className='nganhang'>
              <h4>Ngân hàng TMCP Quân Đội</h4>
            </div>
            <div className='taikhoan'>
              <div className='trai'>
                <p>Số tài khoản</p>
                <p>Chủ tài khoản</p>
                <p>Chi nhánh</p>
                <p>Nội dung chuyển khoản</p>
                <p>Số tiền chuyển khoản</p>
              </div>
              <div className='phai'>
                <p>099999009999</p>
                <p>Công ty cổ phần nhóm 13</p>
                <p>Chi nhánh Cầu Diễn</p>
                <p>Thanh toán đơn hàng VNB202400000012</p>
                <p>1.200.000 VND</p>
              </div>
            </div>
          </div>
          <div className='xn'>
            <button>Tôi đã hoàn tất thanh toán</button>
          </div>
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

export default Pay
