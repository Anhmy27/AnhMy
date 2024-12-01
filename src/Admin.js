import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [medicines, setMedicines] = useState([]);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  // Fetch data from database.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const medicinesResponse = await axios.get('http://localhost:9999/medicines');
        const customersResponse = await axios.get('http://localhost:9999/customers');
        setMedicines(medicinesResponse.data);
        setCustomers(customersResponse.data);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    };
    fetchData();
  }, []);

  // Handle delete customer
  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/customers/${id}`);
      setCustomers(customers.filter((customer) => customer.id !== id)); // Cập nhật lại danh sách khách hàng
      alert('Đã xóa thông tin khách hàng!');
    } catch (error) {
      console.error('Lỗi khi xóa thông tin khách hàng:', error);
      alert('Không thể xóa thông tin khách hàng, vui lòng thử lại!');
    }
  };

  // Handle delete medicine
  const handleDeleteMedicine = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/medicines/${id}`);
      setMedicines(medicines.filter((medicine) => medicine.id !== id)); // Cập nhật lại danh sách thuốc
      alert('Đã xóa loại thuốc!');
    } catch (error) {
      console.error('Lỗi khi xóa thuốc:', error);
      alert('Không thể xóa thuốc, vui lòng thử lại!');
    }
  };

  // Navigate to update thuốc page (add new medicine)
  const handleNavigateToUpdateMedicine = () => {
    navigate('/updatethuoc');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Quản trị viên</h1>

      {/* Bảng các loại thuốc */}
      <h2>Thông tin các loại thuốc</h2>
      <button
        onClick={handleNavigateToUpdateMedicine}
        style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px',
        }}
      >
        Update Thuốc
      </button>
      <table border="1" style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên thuốc</th>
            <th>Hãng sản xuất</th>
            <th>Loại thuốc</th>
            <th>Công dụng</th>
            <th>Giá (VND)</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.manufacturer}</td>
              <td>{medicine.type}</td>
              <td>{medicine.uses}</td>
              <td>{medicine.price.toLocaleString()}</td>
              <td>
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
              </td>
              <td>
                <button
                  onClick={() => handleDeleteMedicine(medicine.id)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bảng thông tin đặt hàng */}
      <h2>Thông tin đặt hàng</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Tên thuốc</th>
            <th>Số lượng</th>
            <th>Tổng tiền (VND)</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.fullName}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.medicineName}</td>
              <td>{customer.quantity}</td>
              <td>{customer.totalPrice.toLocaleString()}</td>
              <td>
                <button
                  onClick={() => handleDeleteCustomer(customer.id)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
