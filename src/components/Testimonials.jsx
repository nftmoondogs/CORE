import { apple, bill, google, yp } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionImgReverse} sm:pt-0`}>
  <img src={yp} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-36 sm:pl-32 pr-4"  />



</div>

<div className={`${layout.sectionInfo} sm:flex drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pr-32`}>
  <h2 className={`${styles.heading4}`}>OpenWaters NFT Marketplace
</h2>
  <p className={`${styles.paragraph2} pt-6 sm:pb-96 pt-0.5`}>
  is The best NFT Marketplace on CoreDAO Blockchain for everyone by 
WOOF LABS OpenWaters is powered by our $WOOF token.<div className={` pt-4 w-full  flex w-[100%] h-[100%]`}>
<a href="https://www.openwaters.uk/" target="_blank" rel="noreferrer"><button type="button" class="text-yellow-400 hover:text-white border justify-center flex object-center border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Visit OpenWaters NFT Marketplace</button></a>
</div>
  </p>



</div>
   </section>
  )


export default Billing