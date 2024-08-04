import { useState } from 'react'
import './App.css'

//importing components
import HeaderSection from './components/header'
import SignUp from './components/SignUP'
import ShowCase from './components/ShowCase'
import Info from './components/Info'
import Footer from './components/Footer'

let signUPData = [
  {
  heading : "Generate more leads with a professional landing page!",
  header : true,
  },
  {
    heading : "Ready to get started? Sign up now!",
    header : false,
    },

]

let featuresData =[
  {
    imageURL: "https://www.svgrepo.com/show/416735/app-browser-window.svg",
    title: "Fully Responsive",
    description: "This theme will look great on any device, no matter the size!",
    id: 1
  },
  {
    imageURL: "https://www.svgrepo.com/show/408426/stack-apps-layers.svg",
    title: "Bootstrap 5 Ready",
    description: "Featuring the latest build of the new Bootstrap 5 framework!",
    id: 2
  },
  {
    imageURL: "https://www.svgrepo.com/show/372709/terminal.svg",
    title: "Easy to Use",
    description: "Ready to use with your own content, or customize the source files!",
    id: 3
  }
]

let testmoniData =[
  {
    profile : true,
    imageURL: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    title: "Margarette",
    description: "\"This is fantastic! Thanks so much guys!\"",
    id: 1
  },
  {
    profile : true,
    imageURL: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    title: "Fred S",
    description: "\"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.\"",
    id: 2
  },
  {
    profile : true,
    imageURL: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    title: "Sara W",
    description: "\"Thanks so much for making these free resources available to us!\"",
    id: 3
  }
]

let infoData = [
  {
    title : "Fully Responsive Design",
    description : "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    imageURL : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"
  },
  {
    imageURL : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"
  },
  {
    title : "Updated For Bootstrap 5",
    description : "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
  },
  {
    title : "Easy to Use & Customize",
    description : "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
  },
  {
    imageURL : "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderSection/>
      <SignUp data = {signUPData[0]}/>
      <ShowCase data = {featuresData}/>
      <Info data = {infoData}/>
      <ShowCase data = {testmoniData}/>
      <SignUp data = {signUPData[1]}/>
      <Footer />
    </>
  )
}

export default App
