import React from "react";

const HeroImage = () => {
    return (
        <div>
            <img style={{width: 1440, height: 720, background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'}}
                 src="https://via.placeholder.com/1440x720"/>


            <div style={{
                width: 603,
                height: 127,
                color: 'black',
                fontSize: 48,
                fontFamily: 'Roboto Slab',
                fontWeight: '400',
                wordWrap: 'break-word',
                position: 'absolute',
                padding: 30
            }}>SBS MTV THE KPOP
            </div>
            <div style={{
                position: 'relative',
                width: 1532,
                height: 253,
                background: 'rgba(15, 23, 42, 0.02)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}/>
            <div style={{
                position: 'absolute', // Sử dụng 'absolute' để định vị chính xác
                top: '133%', // Đặt nó ngay dưới phần "SBS MTV THE KPOP"
                left: '22%',
                transform: 'translateX(-50%)',
                width: 593,
                height: 120,
                color: '#909598',
                fontSize: 32,
                fontFamily: 'Inter',
                fontWeight: '400',
                wordWrap: 'break-word'
            }}>16 June 2023, Fri<br/>Reguler I • 2 Adult • 1 Children
            </div>
        </div>
    );
};

export default HeroImage;
