"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Campus InOut Management System ",
        description: "Campus InOut Management System for students and teachers.",
        image: "/images/projects/2.png",
        tag: ["All", "App"],
        gitUrl: "https://github.com/Patel-Het03/DEP24-P13-Campus-InOut-Management-App",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project Management System",
        description: "Project Management System for managing projects and tasks.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/SE_Project-Management-Software",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "React Portfolio Website",
        description: "My personal portfolio website built with Next and Tailwind CSS.",
        image: "/images/projects/portfolio.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/Portfolio_Website",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Petrol Pump Management System",
        description: "Petrol Pump Management System for managing petrol pumps.",
        image: "/images/projects/4.png",
        tag: ["All"],
        gitUrl: "https://github.com/Patel-Het03/PetrolPump-Management-System",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "B-- Compiler",
        description: "B-- Compiler for compiling B-- language code.",
        image: "/images/projects/5.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "React Movie Website",
        description: "React Movie Website for searching movies and tv shows.",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Patel-Het03/Movie-App",
        previewUrl: "/",
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
        <div className="py-10">
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
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                        />
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default RecentProject