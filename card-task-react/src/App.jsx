import Card from './components/Card'

const App = () => {
  const cards = [
  {
    title: "Web Design",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    tags: ["Landing Page", "Website", "One Page"],
    buttonColor: "bg-sky-400",
    mainColor: "bg-sky-200",
  },
  {
    title: "Web Development",
    description: "Build modern and responsive websites for your business.",
    tags: ["React", "Next.js", "JavaScript"],
    buttonColor: "bg-purple-400",
    mainColor: "bg-purple-200",
  },
  {
    title: "UI/UX Design",
    description: "Create beautiful and user-friendly digital experiences.",
    tags: ["Figma", "Prototype", "Wireframe"],
    buttonColor: "bg-pink-400",
    mainColor: "bg-pink-200",
  },
  {
    title: "Mobile App",
    description: "Develop powerful mobile applications for your users.",
    tags: ["Flutter", "React Native", "Android"],
    buttonColor: "bg-green-400",
    mainColor: "bg-green-200",
  },
];
  return (
    <div className='bg-black h-screen text-white flex items-center justify-center gap-2'>
      {/* create a card */}
      {
        cards.map((card)=>{
          return (
            <Card title={card.title} desc = {card.description} tags={card.tags} buttonColor={card.buttonColor} mainColor = {card.mainColor}/>
          )
        })
      }
    </div>
  )
}

export default App
