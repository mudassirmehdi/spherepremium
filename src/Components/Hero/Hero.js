import React from 'react';
import svgImg from './HeroSvg';

export const Hero = () => (
  <>
        <section className="hero-main">
        <div className="hero-bg">
        <div className='h-100' dangerouslySetInnerHTML={{ __html: svgImg }} />
        </div>

        <div className="container inner">
             <div className="row align-items-center w-100">
                <div className="col-md-8 mb-4 mb-lg-0">
                    <div className="d-flex justify-content-center">
                        <div  className="hero-content  text-center">
                            <div data-aos-delay="400" data-aos="zoom-in-up"  data-aos-duration="800" data-aos-anchor-placement="top-bottom" className="hero-logo"> 
                                <h2> SphPremium </h2>
                                <h2> SphPremium </h2> 
                            </div>
                            <p data-aos-delay="450" data-aos="zoom-in-up"  data-aos-duration="800" data-aos-anchor-placement="top-bottom">Premium license at Discount</p>
                           
                            <div  className="hero-cta">
                                <a data-aos-delay="600" data-aos="zoom-in"  data-aos-duration="1200" data-aos-anchor-placement="top-bottom" href="#" className="btn hero-btn-bg"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg> discord</a>
                                 {/* <a href="#" className="btn hero-btn-outline">Learn more →</a> */}
                            </div>
                        </div>
                     </div>
                </div>
                
                <div className="col-md-4 ">
                    <div className="d-flex justify-content-end">
                        <div data-aos-delay="500" data-aos="zoom-in"  data-aos-duration="900" className="hero-image text-center">
                            <img className="w-100" src="sphere-shape.png"  /> 
                        </div>
                     </div>
                </div>
             </div>
        </div>
    </section>
  </>
);
