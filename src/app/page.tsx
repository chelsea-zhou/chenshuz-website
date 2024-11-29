import { CiLinkedin } from "react-icons/ci";
import { SiSubstack } from "react-icons/si";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6 text-gray-800">
      <h1 className="text-4xl font-buld text-gray-900">ChenshuBot</h1>
      
      <div className="flex justify-left space-x-10 ">
        <a href="https://chenshuz.substack.com" className="text-gray-600 hover:text-gray-900">
        <SiSubstack size={25}/>
        </a>
        <a href="https://linkedin.com/in/chenshuz" className="text-gray-600 hover:text-gray-900">
        <CiLinkedin size={30}/>
        </a>
        {/* <a href="https://github.com/chelsea-zhou" className="text-gray-600 hover:text-gray-900">
          <FaGithub size={30}/>
        </a> */}
        {/* <a href="https://github.com/chelsea-zhou" className="text-gray-600 hover:text-gray-900">
          <MdOutlineEmail size={30}/>
        </a> */}
      </div>
      {/* <p className="text-lg">
          I like writing. I write in <a href="https://chenshuz.substack.com" className="text-lg text-blue-600">English</a>, 
          <a href="https://chenshuz.blog/" className="text-lg text-blue-600" > Chinese</a>, 
          and <a href="https://github.com/chelsea-zhou" className="text-lg text-blue-600" >Code</a>.
          <br></br>
      </p> */}
      <p>Hey! Welcome to CheneshuBot, created from part of Chenshu's <a href="https://chenshuz.substack.com" className="text-lg text-blue-600">writings</a>. 
      If you have any feedbacks, please feel free to share with me at <span>zcs0126@gmail.com</span>.</p>


      <div className="space-y-4  aspect-[3/2] ">
          <h2 className="text-2xl font-semibuld text-gray-800">Chat with me through my writing</h2>
          <Chatbot />
      </div>

      {/* <div className="space-y-4">
          <h2 className="text-2xl font-semibuld text-gray-800">Fun Things I've Done</h2>
          <ul className=" list-inside space-y-2 text-lg">
            
              <li><a className="underline" href="https://chenshuz.substack.com/p/finding-top-10-matches-from-100-essays">Finding top 10 matches in 100 WoP essays</a></li>
          </ul>
      </div>

      <div className="space-y-4">
          <h2 className="text-2xl font-semibuld text-gray-800">Fun Experiences</h2>
      </div> */}
      {/* <LeftAlignedTimeline /> */}

  </div>

    
  );
}
