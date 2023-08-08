import ecom from "./assets/ecommerce.jpg";
import rest from "./assets/restaurant.jpg";
import mail from "./assets/mailbox.jpg";

const WorkCardData = [
  {
    imgsrc: ecom,
    title: "Ecommerce website Design",
    text: "An E-commerce application using React-Js. Firebase for authentication and context Api for storing data.User can view the products and add them to cart and remove from cart.",
    view: "https://chandraecommercedemo.netlify.app",
    source:
      "https://github.com/Chandrasekhar-koneti/E-Commerce-website/tree/9e355972738ade9bcedf066e650488dc3affb897",
  },
  {
    imgsrc: mail,
    title: "Mail-Box ",
    text: "A simple mail application using React-Js where both parties can send and recieve the mails. Read-unread and delete unwanted mails  functionalities were added.Social authenticaton using Google auth.",
    view: "https://chandramailboxdemo.netlify.app",
    source:
      "https://github.com/Chandrasekhar-koneti/mail-box-client/tree/83b91192b2ccc59793154982a5518f4651fd293c",
  },
  {
    imgsrc: rest,
    title: "Restaurant website Design",
    text: "A simple Restaurant web application using React-Js integrating with Context Api to store the data. Css for styling and designing. Full functional cart to store items.",
    view: "https://chandrarestaurantdemo.netlify.app",
    source:
      "https://github.com/Chandrasekhar-koneti/Restaruant-App/tree/1c184f0f41a6902144d528b9c29233c0c9445709",
  },
];

export default WorkCardData;
