import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ShopThuoc.Com</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/tintuc" style={{ textDecoration: 'none', color: 'blue' }}>
              Tin Tức - Sự Kiện
            </Link>
          </li>
          <li>
            <Link to="/nhathuoc" style={{ textDecoration: 'none', color: 'blue' }}>
              Xem các loại thuốc
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
