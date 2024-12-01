import React from 'react';

function Tintuc() {
  const articles = [
    {
      title: 'Nguyên tắc sử dụng thuốc kháng sinh đúng cách',
      link: 'https://znews.vn/balotelli-nhan-luong-beo-bot-post1507294.html',
    },
    {
      title: 'Cách phòng ngừa bệnh tiểu đường hiệu quả',
      link: 'https://giaoducthoidai.vn/balotelli-duoc-dai-gia-serie-a-quan-tam-post703955.html',
    },
    {
      title: 'Tác dụng của vitamin C trong việc tăng cường hệ miễn dịch',
      link: 'https://bongdaplus.vn/ligue-1/mason-greenwood-se-vuot-xa-mario-balotelli-4520742411.html',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'darkblue' }}>Tin Tức - Sự Kiện</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.5' }}>
        Dưới đây là một số bài viết hữu ích về y tế và sức khỏe:
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tintuc;
