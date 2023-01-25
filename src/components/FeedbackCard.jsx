import { quotes } from "../assets"
import styles, { layout } from '../style';


const FeedbackCard = ({ content, name, title, img}) => (
  <div>
  <section id="clients" class="w-full text-center text-white pl:5">
    <div class="w-full px-0 py-24 mx-auto">
      <div class="text-center mb-20">

        <h1 class={`${styles.heading6}`}>
          Frequently Asked Question
        </h1>
       
      </div>
      <div class=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-left sm:pl-64 sm:pr-72 pl-5 pr-5">
        <div class="py-[24px] space-y-[8px] text-left">
          <details class="mb-4">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            Is there a Discord?
            </summary>

            <span>
            Yes, but the Moondogs channels within Discord are NFT-gated (you must hold a Moondog to enter). Once inside, you'll have access to private Moondogs channels with information about community events, airdrop raffles, wl raffles, and more.
            </span>
          </details>

        
<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            How are the 5555 Moondogs distributed?
            </summary>

            <span>
          We will announce the mint date soon until then you must try to engage with our socials as much as possible, Our community managers are always looking out for active members, If you are active then they will provide you a WL Spot.
            </span>
          </details>


<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
              When is the minting date?
            </summary>

            <span>
            To be Announced.
            </span>
          </details>


<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            What are the maximum mints per wallet?
            </summary>

            <span>
            To be Announced.
            </span>
          </details>



<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            What are secondary royalties and how will they be used?
            </summary>

            <span>
            will receive 5% of all secondary sales. These proceeds will be used to continue to hire more full-time employees, fund operations and deliver even more value to our community.
            </span>
          </details>
  


        </div>
      </div>
    </div>
  </section>
</div>
  )


export default FeedbackCard