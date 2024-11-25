import React from "react";

const HeaderHome = ({ image1, image2 }) => {
    return(
        <div style={{width: 1440, height: 720, left: 0, top: 0, position: 'absolute'}}>
        <img style={{
            width: 1440,
            height: 720,
            left: 0,
            top: 0,
            position: 'absolute',
            background: 'linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)'
        }} src={image2}/>
        <div style={{
            width: 1440,
            height: 720,
            left: 0,
            top: 0,
            position: 'absolute',
            opacity: 0.90,
            background: 'linear-gradient(119deg, #ED4690 0%, #5522CC 100%)'
        }}/>
        <div style={{
            left: 1154,
            top: 35,
            position: 'absolute',
            color: 'white',
            fontSize: 16,
            fontFamily: 'DM Sans',
            fontWeight: '500',
            wordWrap: 'break-word'
        }}>My tickets
        </div>
        <div style={{
            width: 40,
            height: 20,
            left: 1264,
            top: 295,
            position: 'absolute',
            transform: 'rotate(-90deg)',
            transformOrigin: '0 0',
            border: '2.33px #3D37F1 solid'
        }}></div>
        <div style={{
            width: 40,
            height: 20,
            left: 177,
            top: 255,
            position: 'absolute',
            transform: 'rotate(90deg)',
            transformOrigin: '0 0',
            border: '2.33px rgba(61, 55, 241, 0.20) solid'
        }}></div>
        <div style={{
            width: 1440,
            height: 70,
            left: 0,
            top: 0,
            position: 'absolute',
            boxShadow: '0px 8px 20px rgba(209.31, 209.31, 209.31, 0.19)'
        }}/>
        <div style={{width: 586, height: 41, left: 778, top: 25, position: 'absolute'}}>
            <div style={{
                left: 0,
                top: 9,
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                wordWrap: 'break-word'
            }}>Music
            </div>
            <div style={{
                left: 72,
                top: 9,
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                wordWrap: 'break-word'
            }}>Sports
            </div>
            <div style={{
                left: 150,
                top: 9,
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                wordWrap: 'break-word'
            }}>Stage and art
            </div>
            <div style={{
                left: 272,
                top: 9,
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                wordWrap: 'break-word'
            }}>Talkshow
            </div>
            <div style={{
                width: 101,
                height: 11,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 10,
                paddingBottom: 10,
                left: 485,
                top: 0,
                position: 'absolute',
                borderRadius: 50,
                border: '1.50px white solid',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'inline-flex'
            }}>
                <div style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Login
                </div>
            </div>
        </div>
        <div style={{width: 34.44, height: 34.44, left: 177, top: 25, position: 'absolute'}}>
            <div style={{
                width: 12.15,
                height: 4.28,
                left: 12.52,
                top: 2.87,
                position: 'absolute',
                background: 'white'
            }}></div>
            <div style={{
                width: 27.38,
                height: 22.31,
                left: 3.53,
                top: 9.25,
                position: 'absolute',
                background: 'white'
            }}></div>
        </div>
        <div style={{
            width: 443,
            left: 820,
            top: 218,
            position: 'absolute',
            color: 'white',
            fontSize: 40,
            fontFamily: 'Proxima Nova',
            fontWeight: '700',
            wordWrap: 'break-word'
        }}>SBS MTV The Kpop Show Ticket Package
        </div>
        <div style={{
            width: 443,
            left: 820,
            top: 342,
            position: 'absolute',
            color: 'white',
            fontSize: 18,
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            lineHeight: 23.40,
            wordWrap: 'break-word'
        }}>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
            recording.
        </div>
        <div style={{width: 182, height: 60, left: 812, top: 441, position: 'absolute'}}>
            <div style={{
                width: 182,
                height: 60,
                left: 0,
                top: 0,
                position: 'absolute',
                background: '#F5167E',
                boxShadow: '0px 10px 50px rgba(61, 55, 241, 0.25)',
                borderRadius: 50
            }}/>
            <div style={{
                left: 46,
                top: 18,
                position: 'absolute',
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontFamily: 'DM Sans',
                fontWeight: '700',
                wordWrap: 'break-word'
            }}>Get Ticket
            </div>
        </div>
        <div style={{width: 182, height: 60, left: 1014, top: 441, position: 'absolute'}}>
            <div style={{
                width: 182,
                height: 60,
                left: 0,
                top: 0,
                position: 'absolute',
                boxShadow: '0px 10px 50px rgba(61, 55, 241, 0.25)',
                borderRadius: 50,
                border: '1.50px white solid'
            }}/>
            <div style={{
                left: 42,
                top: 18,
                position: 'absolute',
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontFamily: 'DM Sans',
                fontWeight: '700',
                wordWrap: 'break-word'
            }}>Learn More
            </div>
        </div>
        <div style={{width: 776, height: 488, left: 76, top: 161, position: 'absolute'}}>
            <div style={{
                width: 776,
                height: 91,
                left: 0,
                top: 397,
                position: 'absolute',
                background: '#141572',
                boxShadow: '100px 100px 100px ',
                borderRadius: 9999,
                filter: 'blur(100px)'
            }}/>
            <img style={{width: 636.84, height: 476, left: 65, top: 0, position: 'absolute'}}
                 src={image1}/>
        </div>
    </div>
    )
}
export default HeaderHome;