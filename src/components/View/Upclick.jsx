import React from 'react';
import Button from 'react-bootstrap/Button';

function Upclick() {
    return (
        <div className='fixed-bottom bg-transparent d-flex'>
            <Button variant='warning' className='rounded-circle m-3 p-2 ms-auto' href='#View'>
                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"
                    width="24px" height="24px" viewBox="0 0 30.021 30.021"
                    xml: space="preserve">
                    <g>
                        <path d="M29.069,22.276c-0.791,0.932-1.917,1.409-3.052,1.409c-0.913,0-1.834-0.312-2.587-0.949l-8.42-7.152l-8.42,7.151
		c-1.683,1.43-4.208,1.225-5.639-0.459c-1.43-1.686-1.224-4.208,0.46-5.64l11.01-9.351c1.493-1.269,3.686-1.269,5.178,0
		l11.011,9.351C30.294,18.068,30.499,20.591,29.069,22.276z"/>
                    </g>
                </svg>
            </Button>
        </div>
    )
}

export default Upclick;