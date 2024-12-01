import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Xong = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { fullName, totalPrice, medicineName } = location.state || {};

    if (!fullName || !totalPrice || !medicineName) {
        // Nếu không có dữ liệu, quay lại trang mua thuốc
        navigate('/nhathuoc');
        return null;
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Đặt hàng thành công!</h1>
            <p>Cảm ơn <strong>{fullName}</strong> đã đặt hàng.</p>
            <p>Thuốc: <strong>{medicineName}</strong></p>
            <p>Tổng tiền: <strong>{totalPrice.toLocaleString()} VND</strong></p>
            <button 
                onClick={() => navigate('/nhathuoc')} 
                style={{ padding: '10px 20px', marginTop: '20px', fontSize: '16px' }}
            >
                Quay lại cửa hàng
            </button>
        </div>
    );
};

export default Xong;
