import Row from "./movie_row.js";
import "./G_b.css";
import Header from "./header.js";



const App = () => {
  const people = [{
		name:"Dear Zindagi",
		year : "2016 • 2h 31m",
		genre: "Drama, Romance",
		Description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, 			helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections",
		imge:"image 1.jpg"
		},
		{
		name:"Brave",
		year : "2012",
		genre:"Adventurous, Comedy ",
		Description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted 			one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse",
		imge:"Brave.png"
		},
		{
		name:"Moana",
		year : "2016 • 1h 47m",
		genre:"Adventurous, Comedy ",
		Description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the 				Ocean's call to seek out the Demigod to set things right.",
		imge:"Moana.png"
		},
		{
		Movie:"Mulan",
		year : "1998 • 1h 27m",
		genre:"Adventurous, Comedy ",
		Description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's 				greatest heroines in the process.",
		imge:"Mulan.png"
		
		},
		{
		Movie:"He Named Me Malala",
		year : "2015 • 1h 28m",
		genre:"Biography, Documentary ",
		Description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on 				girls' education, followed by the aftermath, including her speech to the United Nations.",
		imge:"Soul Surfer.png"
		},
		{
		name:"Soul surfer",
		year : "2011 • 1h 52m",
		genre:"Drama, Biography, Family ",
		Description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left 				arm in a shark attack",
		imge:"Beckham.png"
		},
		{
		name:"Bend it like beckham",
		year : "2002 • 1h 52m",
		genre:"Comedy, Drama & Romance ",
		Description:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.",
		imge:"Into the Wild.png"
		},
		{
		name:"Into the wild",
		year : "2007 • 2h 28m",
		genre:"Adventure, Biography, Drama ",
		Description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, 				gives 	haracters that shape his life.",
		imge:"The Pursuit OF HappyNess.png"
		},
		{
		name:"The Pursuit of Happyness",
		year : "2006 • 1h 57m",
		genre:"Drama, Biography",
		Description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
		imge:"The Intouchables.png"
		},
		{
		name:"The Intouchables",
		year : "2011 • 1h 52m",
		genre:"Drama, Biography, Drama   ",
		Description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be 				his caregiver",
		imge:"The Pursuit OF HappyNess.png"
}];

  return (
    <>
      <Header />
      {people.map((data) => (
        <Row key={data.id} data={data} imge={data.imge}/>
      ))}
    </>
  );
};

export default App;

