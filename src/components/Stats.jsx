import { card } from "../assets"
import styles, { layout } from "../style"
import { Core } from "../assets"

const CardDeal = () => (
    <section className={layout.section}>
<div className={`${layout.sectionInfo} drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pl-32`}>
  <h2 className={`${styles.heading4}`}>CoreDAO</h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  We are launching Moondogs on the CoreDAO blockchain, which offers fast transactions, low fees and a secure, decentralized platform for buying, selling and trading. Moondogs is quickly gaining recognition as one of the top NFT projects on the CoreDAO blockchain  <div className={` pt-4 w-full flex w-[100%] h-[100%]`}>
<a href="https://docs.coredao.org/core-white-paper-v1.0.5/" target="_blank" rel="noreferrer"><button type="button" class="text-yellow-400 hover:text-white border justify-center flex object-center border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">CoreDAO WHITEPAPER</button></a>
</div>
  </p>


</div>

<div className={`${layout.sectionImg}sm:pt-0`}>
  <img src={Core} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-52 sm:pr-32" />
</div>
    </section>
  )


export default CardDeal