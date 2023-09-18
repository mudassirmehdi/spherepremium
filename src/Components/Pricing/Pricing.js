import React from 'react';
import logof1_1 from '../../assets/images/logofl_1.png';
import logosw_1 from '../../assets/images/logosw_1.png';

export const Pricing = () => (

        <section className="our-pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-heading text-center">
                        <h2>Explore Our Pricing</h2>
                        <p>Choose an affordable plan that’s packed with the best features for you.</p>
                    </div>
                </div>
            </div> 

            <div className="row">
                <div className="col-lg-12">
                    <div className="pricing-plan">
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Fluxus</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Script-Ware</button>
                            </li> 
                          </ul>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                <div className="row">
                                <div className="col-lg-4">
                                        <div className="pricing-card">
                                            <div className="pricing-card-head  ">
                                                <img className='mb-4' src={logof1_1} alt='logof1'/>
                                                {/* <img className="mb-4" src="../%PUBLIC_URL%/logofl_1.png" > */}
                                                    
                                                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                                                    <h5>Windows Lifetime</h5>
                                                    <div className="badge-prim">
                                                        Most Popular
                                                    </div>
                                                </div>

                                                <h3>$16.00 <span>/Lifetime</span></h3>
                                            </div>

                                            <div className="pricing-card-body">
                                                

                                                

                                                <ul className="list-unstyled">
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Most Popular
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Fluxus Premium for Windows
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Lifetime license
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Free support
                                                    </li>
                                                </ul>

                                                <a href="#" className="pricing-card-btn">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                <div className="row">
                                <div className="col-lg-4">
                                        <div className="pricing-card">
                                            <div className="pricing-card-head">
                                                <img className="mb-4" src={logosw_1} alt=""/>
                                                        
                                                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                                                    <h5>Script-Ware M</h5>
                                                    <div className="badge-prim">
                                                        Most Popular
                                                    </div>
                                                </div>

                                                <h3>$19.00 <span>/Lifetime</span></h3>
                                            </div>

                                            <div className="pricing-card-body">
                                              

                                                

                                                <ul className="list-unstyled">
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Script-Ware for MacOS
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Script-Ware for IOS
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Lifetime license
                                                    </li>
                                                    <li>
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                        Free support
                                                    </li>
                                                </ul>

                                                <a href="#" className="pricing-card-btn">Purchase</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
