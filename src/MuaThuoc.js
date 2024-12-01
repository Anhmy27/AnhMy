import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MuaThuoc = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const medicine = location.state?.medicine;

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [quantity, setQuantity] = useState(1); // Số lượng mua mặc định là 1

    if (!medicine) {
        navigate('/nhathuoc'); // Quay lại nếu không có dữ liệu
        return null;
    }

    const handleOk = async () => {
        if (!fullName || !phoneNumber) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        try {
            const totalPrice = quantity * medicine.price;

            // Gửi thông tin khách hàng tới JSON-Server vào đối tượng `customers`
            await axios.post('http://localhost:9999/customers', {
                fullName,
                phoneNumber,
                medicineName: medicine.name,
                quantity,
                totalPrice,
            });

            // Chuyển hướng đến trang "Xong.js"
            navigate('/xong', { state: { fullName, totalPrice, medicineName: medicine.name } });
        } catch (error) {
            console.error('Lỗi khi lưu thông tin:', error);
            alert('Không thể lưu thông tin, vui lòng thử lại!');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Chi tiết thuốc</h1>
            <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px' }}>
                <img 
                    src={medicine.image} 
                    alt={medicine.name} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <h3>{medicine.name}</h3>
                <p>Hãng: {medicine.manufacturer}</p>
                <p>Loại: {medicine.type}</p>
                <p>Sử dụng: {medicine.uses}</p>
                <p>Giá mỗi hộp: {medicine.price} VND</p>
            </div>

            <div style={{ marginTop: '20px', maxWidth: '300px' }}>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                    Họ Tên:
                </label>
                <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                    placeholder="Nhập họ tên"
                    style={{ padding: '8px', width: '100%', marginBottom: '12px' }}
                />
                <label style={{ display: 'block', marginBottom: '8px' }}>
                    SĐT:
                </label>
                <input 
                    type="text" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    placeholder="Nhập số điện thoại"
                    style={{ padding: '8px', width: '100%', marginBottom: '12px' }}
                />
                <label style={{ display: 'block', marginBottom: '8px' }}>
                    Số lượng (tối đa 10 hộp):
                </label>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    style={{ padding: '8px', width: '100%', marginBottom: '12px' }}
                >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
                <p><strong>Tổng tiền:</strong> {quantity * medicine.price} VND</p>
                <button 
                    onClick={handleOk} 
                    style={{ padding: '8px 16px', fontSize: '16px', marginTop: '10px', width: '100%' }}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default MuaThuoc;
