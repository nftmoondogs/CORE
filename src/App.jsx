import styles from './style';

import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, WlChecker, Navigation, woof} from './components';
import FeedbackCard from './components/FeedbackCard';


const App = () => (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
       <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

    <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
           <Hero />
          </div>
      </div>


      <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          
          
          <Navigation /> 
          <Billing />   
          <Stats /> 
           <Testimonials />  
           <CardDeal />   
           <CTA />           
           
          </div>
      </div>

         
         
       


      <div className={`bg-foot ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <FeedbackCard />
          </div>
      </div>



      <div className={`bg-foot ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <Footer /> 
          </div>
      </div>


    </div>
  );


export default App