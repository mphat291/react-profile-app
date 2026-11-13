import React from 'react';

function ProfileCard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '350px', margin: '20px auto', textAlign: 'center' }}>
      <h2>Mã Triệu Phát</h2>
      <p><strong>Lớp:</strong> Công nghệ thông tin</p>
      <p><strong>Sở thích:</strong> Lập trình, Calisthenics, Đọc manhwa</p>
      <a href="https://github.com/mphat291" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '10px', padding: '8px 15px', background: '#24292e', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
  GitHub của tôi
</a>
        GitHub của tôi
      </a>
    </div>
  );
}

export default ProfileCard;