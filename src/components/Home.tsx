import React from 'react'
import './home.css'
function Home() {
  return (
    <div className='content'>
      <div className='uudai'>
        <div className='tieude1'>
          <span>
            <b>Giá Vé Ưu Đãi từ</b>
          </span>
          <select name='' id=''>
            <option value=''>Hồ Chí Minh</option>
            <option value=''>Hà Nội</option>
            <option value=''>Đà Nẵng</option>
            <option value=''>Phú Quốc</option>
            <option value=''>Nha Trang</option>
            <option value=''>Cam Ranh</option>
          </select>
        </div>
        <div className='diadiem'>
          <div className='box'>
            <div className='anh'>
              <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2020/11/ve-may-bay-tu-hai-phong-di-nha-trang-6-12-2020-3.jpg' />
            </div>
            <div className='thongtin'>
              <h4>Đi Cam Ranh</h4>
              <span>Hạng phổ thông tiết kiệm</span>
              <div className='gia'>
                <span>Giá vé khứ hồi từ</span>
                <div className='thanhtien'>
                  <span>499,000 VND</span>
                  <button>MUA NGAY</button>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='anh'>
              <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2021/02/nen-di-da-nang-vao-thang-may-26-2-2021-3.jpg' />
            </div>
            <div className='thongtin'>
              <h4>Đi Đà Nẵng</h4>
              <span>Hạng phổ thông tiết kiệm</span>
              <div className='gia'>
                <span>Giá vé khứ hồi từ</span>
                <div className='thanhtien'>
                  <span>499,000 VND</span>
                  <button>MUA NGAY</button>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='anh'>
              <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2020/05/ve-may-bay-di-ha-noi-22-1-2021-2.jpg' />
            </div>
            <div className='thongtin'>
              <h4>Đi Hà Nội</h4>
              <span>Hạng phổ thông tiết kiệm</span>
              <div className='gia'>
                <span>Giá vé khứ hồi từ</span>
                <div className='thanhtien'>
                  <span>699,000 VND</span>
                  <button>MUA NGAY</button>
                </div>
              </div>
            </div>
          </div>
          <div className='box'>
            <div className='anh'>
              <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2021/04/flight-1.jpg' />
            </div>
            <div className='thongtin'>
              <h4>Đi Phú Quốc</h4>
              <span>Hạng phổ thông tiết kiệm</span>
              <div className='gia'>
                <span>Giá vé khứ hồi từ</span>
                <div className='thanhtien'>
                  <span>599,000 VND</span>
                  <button>MUA NGAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='khuyenmai'>
        <div className='tieude1'>
          <span>
            <b>Vietnam Airlines khuyến mãi</b>
          </span>
        </div>
        <div className='ndkm'>
          <div className='boxkm'>
            <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/10/ve-may-bay-tet-2024-11082023-2.jpg' />
            <div className='nd'>
              <a href='#'>Vé máy bay Tết 2024 nhiều ưu đãi từ các hãng hàng không</a>
              <p>
                Vé máy bay chỉ dành riêng cho dịp nghỉ Tết Dương lịch và Tết Nguyên Đán Giáp Thìn 2024 đã được các hãng
                hàng không mở bán
              </p>
            </div>
          </div>
          <div className='boxkm'>
            <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/05/ve-khuyen-mai-vietnam-airlines-11052023-2.jpg' />
            <div className='nd'>
              <a href='#'>Vé máy bay Tết 2024 nhiều ưu đãi từ các hãng hàng không</a>
              <p>
                Vé máy bay chỉ dành riêng cho dịp nghỉ Tết Dương lịch và Tết Nguyên Đán Giáp Thìn 2024 đã được các hãng
                hàng không mở bán
              </p>
            </div>
          </div>
          <div className='boxkm'>
            <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2019/03/vietnam-airlines-khuyen-mai-chao-he-29032023-2.jpg' />
            <div className='nd'>
              <a href='#'>Vé máy bay Tết 2024 nhiều ưu đãi từ các hãng hàng không</a>
              <p>
                Vé máy bay chỉ dành riêng cho dịp nghỉ Tết Dương lịch và Tết Nguyên Đán Giáp Thìn 2024 đã được các hãng
                hàng không mở bán
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='tintuc'>
        <div className='tieude1'>
          <span className='text-center'>
            <b>Tin Tức Mới Nhất</b>
          </span>
        </div>
        <div className='tintuc-nd'>
          <div className='trai'>
            <img src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/12/noel-di-dau-choi-o-ha-noi.jpg' />
            <div className='ndtrai'>
              <a href='#'>Noel đi đâu chơi ở Hàn Nội, Top 10 địa điểm không thể bỏ qua</a>
              <p>
                Hà Nội mùa Giáng sinh mang một vẻ đẹp rất riêng, vừa cổ kính, lãng mạn lại đầy mê hoặc. Những con phố
                ngập tràn sắc đỏ, những ngôi nhà cổ kính được...
              </p>
            </div>
          </div>
          <div className='phai'>
            <ul>
              <li>
                <a href='#'>Ưu đãi vé máy bay từ Hà Nội đi Hạ Long khứ hồi</a>
              </li>
              <li>
                <a href='#'>Cơ hội mau vè máy bay từ Đà Nẵng đi Hà Nội</a>
              </li>
              <li>
                <a href='#'>Tháng 12 nên đi du lịch ở đâu?</a>
              </li>
              <li>
                <a href='#'>Đừng bỏ lỡ chuyến bay Hà Nôi đi Nha Trang tháng 7, chỉ từ 299.000Đ</a>
              </li>
              <li>
                <a href='#'>Thông tin thời gian bay từ Hồ Chí Minh đi Nha Trang</a>
              </li>
              <li>
                <a href='#'>Thời gian bay từ Hà Nội về Sài Gòn</a>
              </li>
              <li>
                <a href='#'>Ưu đãi vé máy bay từ Hà Nội đi Hạ Long khứ hồi</a>
              </li>
              <li>
                <a href='#'>Cơ hội mau vè máy bay từ Đà Nẵng đi Hà Nội</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='ttnoibat'>
        <div className='tieude1'>
          <span>
            <b>Thông tin nổi bật</b>
          </span>
        </div>
        <div className='ttnoibat-nd'>
          <div className='boxtt'>
            <div className='square-container'>
              <div className='inner-container'>
                <img
                  className='square-image'
                  src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/02/ve-may-bay-thang-4-21032023-8.jpg'
                />
              </div>
            </div>
            <div className='tentt'>
              <h5>Nhiều cơ hội săn vé máy bay tháng 4 Vietnam Airlines, giá ưu đãi</h5>
              <a href='#'>Xem chi tiết</a>
            </div>
          </div>
          <div className='boxtt'>
            <div className='square-container'>
              <div className='inner-container'>
                <img
                  className='square-image'
                  src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2023/02/ve-may-bay-thang-5-13042023-5.jpg'
                />
              </div>
            </div>
            <div className='tentt'>
              <h5>Nhiều cơ hội săn vé máy bay tháng 4 Vietnam Airlines, giá ưu đãi</h5>
              <a href='#'>Xem chi tiết</a>
            </div>
          </div>
          <div className='boxtt'>
            <div className='square-container'>
              <div className='inner-container'>
                <img
                  className='square-image'
                  src='https://www.vietnamairlinesgiare.vn/wp-content/uploads/2022/08/ve-may-bay-vietnam-airlines-thang-3-23022023-3.jpg'
                />
              </div>
            </div>
            <div className='tentt'>
              <h5>Nhiều cơ hội săn vé máy bay tháng 4 Vietnam Airlines, giá ưu đãi</h5>
              <a href='#'>Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
      <div className='vegg'>
        <div className='tieude1'>
          <span>
            <b>Vé giá rẻ Vietnam Airlines</b>
          </span>
        </div>
        <div className='vegg-nd'>
          <ul>
            <li>
              <a href='#'>Vé máy bay đi Hà Nội</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Huế</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Buôn Ma Thuột</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Đà Lạt</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Thanh Hóa</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Vé máy bay đi Hà Nội</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Huế</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Buôn Ma Thuột</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Đà Lạt</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Thanh Hóa</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Vé máy bay đi Hà Nội</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Huế</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Buôn Ma Thuột</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Đà Lạt</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Thanh Hóa</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href='#'>Vé máy bay đi Hà Nội</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Huế</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Buôn Ma Thuột</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Đà Lạt</a>
            </li>
            <li>
              <a href='#'>Vé máy bay đi Thanh Hóa</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
