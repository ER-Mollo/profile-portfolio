import React from 'react'
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Project.scss";


// import ProjectData from './ProjectData'
import Contact from '../Contact/Contact';
import { db } from '../config/firebase';
import {addDoc, collection,doc, deleteDoc,getDocs,query,where} from 'firebase/firestore';

function Projects() {
   const [ProjectData,setProjectData]= React.useState([]);

   const project=[];
   const projectRef = collection(db,"projects");

   const getItems = async()=>{

      // const q = query(collection(db, "projects"));
      //   const querySnapshot = await getDocs(q)
        

      //   querySnapshot.forEach((doc) => {
        
      //     console.log(doc.data())
      //     project.push({id:doc.id , codeLink: doc.data().codeLink,description:doc.data().description, imageUrl:doc.data().imageUrl,projectLink:doc.data().projectLink,tag:doc.data().tag,title:doc.data().title})
      // });


      // setProjectData(project);
      let data = await getDocs(projectRef);
      setProjectData(data.docs.map((doc)=>({...doc.data(),id: doc.id})))

      // setPrices(data.docs.map((doc)=>(doc.data().price)));

      

      
      }

      React.useEffect(()=>{
         console.log("some")
         getItems();
         
         
        }, [])

   return (
      <>
        
        {/* <Contact/> */}
        <div className="heading">
            <h2>Recent Projects</h2>
            <h1>Look At The Projects I Worked on</h1>
         </div>
        

         <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
         >
            {ProjectData.map((work, index) => (
               <div className="app__work-item app-flex" key={index}>
                  <div className="app__work-img app-flex">
                     <img src={work.imageUrl} alt="work"></img>
                     <motion.div
                        className="app__work-hover app-flex"
                        whileHover={{ opacity: [1, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: " easeInOut",
                           staggerChildren: 0.5,
                        }}
                     >
                        <a
                           href={work.projectLink}
                           target="blank"
                           rel="noreferrer"
                        >
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillEye />
                           </motion.div>
                        </a>
                        <a href={work.codeLink} target="blank" rel="noreferrer">
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillGithub />
                           </motion.div>
                        </a>
                     </motion.div>
                  </div>
                  <div className="app__work-content app__flex">
                     <h4 className="bold-text">{work.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {work.description}
                     </p>
                     <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tag} </p>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </>
   )
}

export default Projects
