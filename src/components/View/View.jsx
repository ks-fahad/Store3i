import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import PagePath from '../PagesHandle/PagePath';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

function View({category}) {
    const [productByFilter, setProductByFilter] = useState('All');
    const [showGrid, setShowGrid] = useState(true);
    return (
        <>
            <div className='p-4 m-0 border-top' data-bs-spy="scroll" data-bs-target="#navbar-id" data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true" tabindex="0" id='view_id'>
                <PagePath />
                <div className="d-flex w-100 p-0 bg-light rounded" id='View'>
                    <div className="me-auto">
                        <Button className='p-1 rounded bg-opacity-50' variant="light" onClick={() => setShowGrid(false)}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Editor" transform="translate(-48.000000, -240.000000)" fill-rule="nonzero">
                                        <g id="list_check_3_fill" transform="translate(48.000000, 240.000000)">
                                            <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

                                            </path>
                                            <path d="M7,13 C8.05436227,13 8.91816517,13.81585 8.99451427,14.8507339 L9,15 L9,18 C9,19.0543909 8.18412267,19.9181678 7.14926241,19.9945144 L7,20 L4,20 C2.94563773,20 2.08183483,19.18415 2.00548573,18.1492661 L2,18 L2,15 C2,13.9456091 2.81587733,13.0818322 3.85073759,13.0054856 L4,13 L7,13 Z M16,17 C16.5523,17 17,17.4477 17,18 C17,18.51285 16.613973,18.9355092 16.1166239,18.9932725 L16,19 L12,19 C11.4477,19 11,18.5523 11,18 C11,17.48715 11.386027,17.0644908 11.8833761,17.0067275 L12,17 L16,17 Z M20,13 C20.5523,13 21,13.4477 21,14 C21,14.5523 20.5523,15 20,15 L12,15 C11.4477,15 11,14.5523 11,14 C11,13.4477 11.4477,13 12,13 L20,13 Z M7,3 C8.10457,3 9,3.89543 9,5 L9,8 C9,9.10457 8.10457,10 7,10 L4,10 C2.89543,10 2,9.10457 2,8 L2,5 C2,3.89543 2.89543,3 4,3 L7,3 Z M16,7 C16.5523,7 17,7.44772 17,8 C17,8.51283143 16.613973,8.93550653 16.1166239,8.9932722 L16,9 L12,9 C11.4477,9 11,8.55228 11,8 C11,7.48716857 11.386027,7.06449347 11.8833761,7.0067278 L12,7 L16,7 Z M20,3 C20.5523,3 21,3.44772 21,4 C21,4.51283143 20.613973,4.93550653 20.1166239,4.9932722 L20,5 L12,5 C11.4477,5 11,4.55228 11,4 C11,3.48716857 11.386027,3.06449347 11.8833761,3.0067278 L12,3 L20,3 Z" id="形状" fill="#09244B">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Button>

                        <Button className='p-1 rounded' variant="light" onClick={() => setShowGrid(true)}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.15">
                                    <path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" fill="#000000" />
                                    <path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" fill="#000000" />
                                    <path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" fill="#000000" />
                                </g>
                                <path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Button>
                    </div>
                    <div className="ms-auto my-auto">
                        <Dropdown className='bg-white rounded'>
                            <Dropdown.Toggle className="bg-transparent border-0 text-black" id="dropdown-basic">
                                <strong>Sort</strong>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setProductByFilter('New')}>Sort By Latest</Dropdown.Item>
                                <Dropdown.Item onClick={() => setProductByFilter('Low')}>Sort By Price: Low to High</Dropdown.Item>
                                <Dropdown.Item onClick={() => setProductByFilter('High')}>Sort By Price: High to Low</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Products category_id={category} type={productByFilter} showType={showGrid}/>
        </>
    )
}

export default View;