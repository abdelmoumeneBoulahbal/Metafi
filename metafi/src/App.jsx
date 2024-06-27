




/* Components */
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Card from "./components/Card/Card";
import Pricing from "./pages/Home/Pricing";


/* css */
import './index.css'
import Footer from "./components/Footer/Footer";



export default function App() {

  const cards = [
    {
      link: '../assets/images/mailchimp.jpg',
      title: 'Mailchimp',
      descrip: 'Take control of your email design by using your own custom-coded HTML templates'
    },
    {
      link: '../assets/images/zappier.png',
      title: 'Zapier',
      descrip: 'Connect Apps and Automate Workflows with Zapier ~~ No Coding Required'
    },
    {
      link: '../assets/images/stripe.png',
      title: 'Stripe',
      descrip: 'Work faster and smarter bt integrating directly with Stripe, right in the app'
    }
  ]


  return(
    <>
      <Navbar/>
      <Home/>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card 
              key={index}
              link={card.link}
              title={card.title}
              descrip={card.descrip}

          />
        ))}
      </div>
      <Pricing />
      <Footer />
    </>
  
  );


}