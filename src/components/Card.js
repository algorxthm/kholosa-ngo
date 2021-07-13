
function Card() {
  return (
    <div className="card-service"  >
      <div className="container text-center">
        <div className="section-head col-sm-12">
          <div className="head mt-3 display-4 text-center ">
            <h1 className="head text-center">
              <span style={{ color:'#635bfb'}}><strong>Our NGO Programs</strong></span>
            </h1>
          </div>
          <p className="text-center" style={{color:'black', fontFamily: "Uchen"}}>i know the pain of not having sanitary pads.I know the pain od using toilets papers and old cloths as Pads.<br></br>It's not because i had a choice . but the situation and a struggle led me to that position </p>
        </div>

        <div className="row ">
          <div className="col-lg-4 col-sm-12">
            <div className="item">
              <span className="icon feature_box_col_one">
                <i class="fas fa-hands"></i>
              </span>
              <h3>Girls Empowerment</h3>
              <p style={{fontSize:14 ,  fontFamily: "Uchen"}}>
                Through this organisation we find a way of helping girls to get back their confidence<br/>
                emotional support helped my Sisters to get back to thier lifes again..

              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="item">
              <span className="icon feature_box_col_two">
                <i class="fas fa-award"></i>
              </span>
              <h3>Motivations</h3>
              <p  style={{fontSize:14 , fontFamily: "Uchen" }}>
              Starting this program to me was to help the image of myself<br/>As a woman
                ,I understand how it feels not having SANITARY PADS<br/>I
               know the pain<br/>
              </p>
            </div>
          </div>
          <div className=" col-lg-4 col-sm-12">
            <div className="item">
              <span className="icon feature_box_col_three">
                <i class="fas fa-trophy"></i>
              </span>
              <h3>Giving the Products</h3>
              <p  style={{fontSize:14 , fontFamily: "Uchen"}}>
                I would like to give thanks to people who Donate in this program<br/>and I give thanks to my mother Miss P.Jakalase ,Ezile Jakalase 
                M.Ndlovu,A.Kolweni,Mlab Team..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
