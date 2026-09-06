import Card from "./components/Card";

const App = () => {
  const data = [
    {
      heading: "Project management",
      paragraph:
        "Create tasks, track time, and update progress all in one place.",
      icon: "Clipboard",
      bgColor: "bg-blue-50 text-blue-500",
    },
    {
      heading: "Time tracking",
      paragraph: "Discover how much time your team is spending on their work.",
      icon: "Clock",
      bgColor: "bg-purple-50 text-purple-500",
    },
    {
      heading: "Resource planning",
      paragraph: "Monitor how your resources are utilized across projects.",
      icon: "Calendar",
      bgColor: "bg-red-50 text-red-500",
    },
    {
      heading: "Invoicing",
      paragraph:
        "Save time by invoicing based on reported time for accurate billing.",
      icon: "DollarSign",
      bgColor: "bg-green-50 text-green-500",
    },
  ];

  // arr = [{},{},{},{}]
  // arr.map((value)=>{
  //   {}
  // })



  return (
    <div className="h-screen w-full bg-black text-white flex justify-center items-center gap-2">
      {
        data.map((item, index) => {
          console.log("card: ", item)
          return <div key={index}>
            <Card heading={item.heading} para={item.paragraph} icon={item.icon} bgColor={item.bgColor}/>
          </div>
        })

      }
    </div>
  );
};

export default App;
