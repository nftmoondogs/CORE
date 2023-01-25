import { apple, bill, google, collage } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionImgReverse} sm:pt-0 pb-12`}>
  <img src={collage} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-9 pb-44 sm:pl-32"  />



</div>

<div className={`${layout.sectionInfo} sm:flex drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pr-32`}>
  <h2 className={`${styles.heading5}`}>Moondogs are 
 <br className="sm:block hidden" /> more than just an avatar.</h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  They're a collection of 5555 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moondog unlocks private club membership and additional benefits the longer you hold them.
  </p>



</div>
   </section>
  )


export default Billing