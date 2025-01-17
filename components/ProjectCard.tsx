import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/3d-card";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl, className }) => {
  return (
    <div className="h-full">
      <CardContainer className={cn("inter-var ", className)} >
        <CardBody className="bg-[#04071d] grey relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.3] w-full h-full rounded-xl p-3 border  ">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imgUrl}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-sm font-normal dark:text-white text-white py-4"
          >
            {description}
          </CardItem>

          <div className="flex justify-between mt-10 ">
            <CardItem
              translateZ={20}
              as={Link}
              href={gitUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              GitHub Link →
            </CardItem>
            <a href={previewUrl}>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                href={previewUrl}
              >
                Preview
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default ProjectCard;