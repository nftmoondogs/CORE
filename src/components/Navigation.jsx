import { card } from "../assets"
import styles, { layout } from "../style"
import { coin } from "../assets"

const CardDeal = () => (
    <section className={layout.section}>
<div className={`${layout.sectionInfo} drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pl-32`}>
  <h2 className={`${styles.heading4}`}>$WOOF</h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  WOOF token is used to empower WOOF LABS decentralized ecosystem building at the forefront of web3 on CoreDao Blockchain and is also used in our Open Waters NFT Marketplace to buy and sale NFTs <div className={` pt-4 w-full flex w-[100%] h-[100%]`}>
<a href="https://wooftoken.gitbook.io/woof-token/" target="_blank" rel="noreferrer"><button type="button" class="text-yellow-400 hover:text-white border justify-center flex object-center border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">See Tokenomics</button></a>
<a href="https://www.geckoterminal.com/core/pools/0xc1816acdd64e380b5f69203df96e3d30603e29fc" target="_blank" rel="noreferrer"><button type="button" class="text-yellow-400 hover:text-white border justify-center flex object-center border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Track WOOF Price</button></a>
</div>
  </p>


</div>

<div className={`${layout.sectionImg}sm:pt-0`}>
  <img src={coin} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-52 sm:pr-32" />
</div>
    </section>
  )


export default CardDeal