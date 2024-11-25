import React from "react";
import image3 from "../../img/image3.png";

const MakeEvent = () => {
    return (
        <div style={{width: 1440, height: 303, left: 0, top: 1956, position: 'absolute'}}>
            <div style={{
                width: 1440,
                height: 252,
                left: 0,
                top: 51,
                position: 'absolute',
                background: '#EEE1FF'
            }}/>
            <img style={{width: 544.67, height: 303, left: 100, top: 0, position: 'absolute'}}
                 src={image3}/>
            <div style={{width: 417.17, height: 182, left: 696, top: 86, position: 'absolute'}}>
                <div style={{width: 302, height: 60, left: 0, top: 122, position: 'absolute'}}>
                    <div style={{
                        width: 302,
                        height: 60,
                        left: 0,
                        top: 0,
                        position: 'absolute',
                        background: '#F5167E',
                        boxShadow: '0px 10px 50px rgba(61, 55, 241, 0.25)',
                        borderRadius: 50
                    }}/>
                    <div style={{
                        left: 90,
                        top: 18,
                        position: 'absolute',
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18,
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        wordWrap: 'break-word'
                    }}>Create Events
                    </div>
                </div>
                <div style={{
                    width: 417.17,
                    height: 101,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    color: 'black',
                    fontSize: 34,
                    fontFamily: 'DM Sans',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                }}>Make your own Event
                </div>
                <div style={{
                    width: 382,
                    left: 0,
                    top: 55,
                    position: 'absolute',
                    color: '#272727',
                    fontSize: 18,
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>

    )
}
export default MakeEvent;