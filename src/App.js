
 
import Banner from './components/Banner';
import ExpertsSection from './components/ExpertSection';
import FameSection from './components/FameSection';
import LearnSection from './components/LearnSection';
import MentorIntro from './components/MentorIntro';
import SuccessStories from './components/SuccessStories';
import ConfusedBenefitsSection from './components/ConfusedBenefitsSection';
import FAQSection from './components/FAQSection';
import OfferBanner from './components/offerBanner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <LearnSection/>
      <FameSection/>
      <ExpertsSection/> 
      <SuccessStories/> 
      <MentorIntro/>  
      <ConfusedBenefitsSection/>
      <FAQSection/>
      <OfferBanner/>
    </div>
  );
}

export default App;
