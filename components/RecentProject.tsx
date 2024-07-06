"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/3d-card";

const projectsData = [
    {
        id: 1,
        title: "Campus InOut Management System ",
        description: "This project aims to develop a campus InOut management application that tracks and manages the entry and exit of students, staff, and visitors on a university campus. The app will handle user authentication, ticket generation and verification through QR codes on campus entry and exit.",
        image: "/images/projects/Campus-InOut-Image.jpg",
        tag: ["All", "App"],
        gitUrl: "https://github.com/Patel-Het03/DEP24-P13-Campus-InOut-Management-App",
        previewUrl: "/404Page",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    },
    {
        id: 2,
        title: "Project Management System",
        description: "Developed a collaborative project management system that streamlines team collaboration and task tracking, enhancing project workflows. The system includes features like secure user access through JWT-based authentication and efficient data storage with MongoDB. Built using React for the frontend and Node.js for the backend.",
        image: "/images/projects/Project-Management-Image.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/SE_Project-Management-Software",
        previewUrl: "/404Page",
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "My portfolio website is built using Next.js with TypeScript and Aceternity UI, showcasing my projects and professional experience. It provides a comprehensive view of my skills and accomplishments in software development. Explore my work and get to know my journey in the tech industry.",
        image: "/images/Portfolio1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/Portfolio_Website",
        previewUrl: "https://patel-het.vercel.app/",
    },
    {
        id: 4,
        title: "Petrol Pump Management System",
        description: "A PetrolPump Management System built using Python and MySQL, featuring a Streamlit-based user interface. The system supports comprehensive CRUD operations and includes advanced functionalities such as salary triggers and price calculations, offering an efficient solution for managing petrol pump operations. Developed as part of a DBMS course project.",
        image: "/images/projects/database-image.jpg",
        tag: ["All"],
        gitUrl: "https://github.com/Patel-Het03/PetrolPump-Management-System",
        previewUrl: "/404Page",
    },
    {
        id: 5,
        title: "B-- Compiler",
        description: "Developed a B-- compiler as part of a course project. Utilized BMM for parsing and a custom lexer for tokenization. The compiler translates B-- code into executable binaries",
        image: "/images/projects/Compiler-image.jpg",
        tag: ["All"],
        gitUrl: "https://github.com/Patel-Het03/B--Compiler",
        previewUrl: "/404Page",
    },
    {
        id: 6,
        title: "React Movie Website",
        description: "The Movie App is a web application that allows users to search for movies and view detailed information about them. The app utilizes the TMDB API to fetch movie data and displays it in a user-friendly interface.",
        image: "/images/projects/Movie.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/Movie-App",
        previewUrl: "/404Page",
    },
]; 

const RecentProject = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <div className="py-10 w-full" id="project">
            <h1 className="heading text-white">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="App"
                    isSelected={tag === "App"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 md:gap-x-10 gap-y-9 h-full">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            className={project.className}
                        />
                    </motion.li>
                ))} 
             </ul>
            
        </div>
    )
}

export default RecentProject
