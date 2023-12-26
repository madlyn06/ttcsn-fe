import React from 'react'
import './header_footer.css'
export default function Footer() {
  return (
    <footer className='pt-4'>
      <div className='footer_top'>
        <div className='footer_top_col1'>
          <div className='footer_logo'>
            <a href='#'>
              <img src='../img/logo_nosub.svg' alt='' />
            </a>
          </div>
          <div className='col1_icon'>
            <i style={{ color: '#ffc43b' }} className='far fa-clock' />
            <span>Hỗ trợ 24/7 (các ngày trong tuần)</span>
          </div>
          <div className='col1_icon'>
            <i style={{ color: '#ffc43b' }} className='fas fa-phone' />
            <span>HOTLINE: 1900 4798</span>
          </div>
          <div className='col1_icon'>
            <i style={{ color: '#ffc43b' }} className='far fa-envelope' />
            <span>ttcsn_N1@gmail.com</span>
          </div>
        </div>
        <div className='footer_top_col2'>
          <ul className='col2_text'>
            <h3>PHÁP LÝ</h3>
            <li className='col_li_text'>
              <a href='#'>Điều khoản sử dụng</a>
            </li>
            <li className='col_li_text'>
              <a href='#'>Chính sách bảo mật</a>
            </li>
            <li className='col_li_text'>
              <a href='#'>Chính sách hoàn hủy</a>
            </li>
          </ul>
        </div>
        <div className='footer_top_col3'>
          <ul className='col2_text'>
            <h3>HỖ TRỢ</h3>
            <li className='col_li_text'>
              <a href='#'>Hướng dẫn liên hệ qua Zalo</a>
            </li>
            <li className='col_li_text'>
              <a href='#'>Hướng dẫn liên hệ qua Viber</a>
            </li>
            <li className='col_li_text'>
              <a href='#'>Hướng dẫn thanh toán</a>
            </li>
          </ul>
        </div>
        <div className='footer_top_col4'>
          <ul className='col2_text'>
            <h3>THÔNG TIN HỮU ÍCH</h3>
            <li className='col_li_text'>
              <a href='#'>Thông tin hành lý</a>
            </li>
            <li className='col_li_text'>
              <a href='#'>Thuế phí, lệ phí và phụ thu</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer_betw'>
        <div className='footer_betw_col1'>
          <ul className='col2_text'>
            <div className='bew_col1_tittle'>
              <i className='fas fa-map-marker-alt' />
              <span>HỒ CHÍ MINH</span>
            </div>
            <li className='col_li_text1'>
              <a href='#'>190-192 Trần Quý, Phường 6, Quận 11</a>
            </li>
            <li className='col_li_text1'>
              <a href='#'>164 Lê Thánh Tôn, Bến Thành, Quận 1</a>
            </li>
            <li className='col_li_text1'>
              <a href='#'>54 Phạm Hồng Thái, Bến Thành, Quận 1</a>
            </li>
          </ul>
        </div>
        <div className='footer_betw_col2'>
          <div className='bew_col1_tittle'>
            <i className='fas fa-map-marker-alt' />
            <span>HÀ NỘI</span>
            <div className='betw_col2_text'>
              <span>30 Phan Chu Trinh, Quận Hoàn Kiếm</span>
            </div>
          </div>
        </div>
        <div className='footer_betw_col3'>
          <div className='bew_col1_tittle'>
            <i className='fas fa-map-marker-alt' />
            <span>ĐÀ NẴNG</span>
            <div className='betw_col2_text'>
              <span>174 Nguyễn Văn Linh, Quận Thanh Khê</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
