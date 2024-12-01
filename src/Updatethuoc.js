import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Updatethuoc() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    type: '',
    uses: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9999/medicines', { ...formData, price: parseInt(formData.price, 10) });
      alert('Thêm thuốc mới thành công!');
      navigate('/admin');
    } catch (error) {
      console.error('Lỗi khi thêm thuốc:', error);
      alert('Không thể thêm thuốc mới!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Thêm thuốc mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên thuốc:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Hãng sản xuất:</label>
          <input type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} required />
        </div>
        <div>
          <label>Loại thuốc:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        </div>
        <div>
          <label>Công dụng:</label>
          <input type="text" name="uses" value={formData.uses} onChange={handleChange} required />
        </div>
        <div>
          <label>Giá (VND):</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Hình ảnh (URL):</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
        </div>
        <button type="submit">Thêm thuốc</button>
      </form>
    </div>
  );
}

export default Updatethuoc;
