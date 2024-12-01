import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NhaThuoc = () => {
    const [medicines, setMedicines] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMedicines, setFilteredMedicines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:9999/medicines')
            .then((response) => {
                setMedicines(response.data);
                setFilteredMedicines(response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi gọi API:", error);
            });
    }, []);

    const handleSearch = () => {
        const filtered = medicines.filter((medicine) => 
            medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            medicine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMedicines(filtered);
    };

    const handleBuy = (medicine) => {
        navigate('/muathuoc', { state: { medicine } });
    };

    return (
        <div>
            <h1>Shop Medicine</h1>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    placeholder="Tìm theo tên hoặc hãng sản xuất..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px', width: '300px' }}
                />
                <button 
                    onClick={handleSearch} 
                    style={{ padding: '8px 16px', fontSize: '16px', marginLeft: '10px' }}
                >
                    Tìm
                </button>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {filteredMedicines.map((medicine) => (
                    <div key={medicine.id} style={{ border: '1px solid #ddd', padding: '16px', width: '200px' }}>
                        {medicine.image ? (
                            <img 
                                src={medicine.image} 
                                alt={medicine.name} 
                                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                            />
                        ) : (
                            <div style={{ width: '100%', height: '150px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span>Không có ảnh</span>
                            </div>
                        )}
                        <h3>{medicine.name || "Tên không có sẵn"}</h3>
                        <p>Hãng: {medicine.manufacturer || "Không rõ"}</p>
                        <p>Loại: {medicine.type || "Không rõ"}</p>
                        <p>Sử dụng: {medicine.uses || "Không rõ"}</p>
                        <p>Giá: {medicine.price ? `${medicine.price} VND` : "Liên hệ"}</p>
                        <button 
                            onClick={() => handleBuy(medicine)} 
                            style={{ padding: '8px 16px', fontSize: '16px', marginTop: '10px' }}
                        >
                            Buy
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NhaThuoc;
