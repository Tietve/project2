import React from "react";

const SearchingHome = () => {
    return(
        <div style={{width: 1086, height: 140, left: 177, top: 650, position: 'absolute'}}>
        <div style={{
            width: 1086,
            height: 140,
            left: 0,
            top: 0,
            position: 'absolute',
            background: '#242565',
            boxShadow: '0px 10px 50px rgba(61, 55, 241, 0.25)',
            borderRadius: 20
        }}/>
        <div style={{width: 990, height: 65, left: 48, top: 30, position: 'absolute'}}>
            <div style={{width: 290, height: 65, left: 0, top: 0, position: 'absolute'}}>
                <div style={{
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Search Event
                </div>
                <div style={{
                    width: 290,
                    height: 0,
                    left: 0,
                    top: 65,
                    position: 'absolute',
                    border: '1px #7778B0 solid'
                }}></div>

            </div>
            <div style={{width: 290, height: 65, left: 350, top: 0, position: 'absolute'}}>
                <div style={{
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Place
                </div>
                <div style={{
                    width: 290,
                    height: 0,
                    left: 0,
                    top: 65,
                    position: 'absolute',
                    border: '1px #7778B0 solid'
                }}></div>
                <div style={{
                    width: 290,
                    left: 0,
                    top: 43,
                    position: 'absolute',
                    textAlign: 'left',
                    color: 'white'
                }} contentEditable={true}>

                </div>
            </div>
            <div style={{width: 290, height: 65, left: 700, top: 0, position: 'absolute'}}>
                <div style={{
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Time
                </div>
                <div style={{
                    width: 290,
                    height: 0,
                    left: 0,
                    top: 65,
                    position: 'absolute',
                    border: '1px #7778B0 solid'
                }}></div>
                <div style={{
                    width: 0,
                    height: 0,
                    left: 279,
                    top: 49,
                    position: 'absolute',
                    borderLeft: '5px solid transparent',
                    borderRight: '5px solid transparent',
                    borderTop: '10px solid white',
                    cursor: 'pointer'
                }}></div>
            </div>
        </div>
    </div>
    )
}
export default SearchingHome;