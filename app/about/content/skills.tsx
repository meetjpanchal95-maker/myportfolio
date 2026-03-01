"use client";
import React from "react";
import { motion } from "framer-motion";
const m: any = motion;
import DescribeListBlock from "../shared/describeListBlock";

const skillsList = [
  {
    title: "Advanced Prototyping",
    description: "Figma, Adobe XD, Framer",
  },
  {
    title: "Documentation",
    description: "Docs, Google/ MS Sheets, Google/ MS Slides, WPS",
  },
  {
    title: "Visual Diagramming",
    description: "Whimsical, Draw.io, Figma",
  },
  {
    title: "Content Creation",
    description: "Figma, Canva, Generative AI Tools",
  },
  {
    title: "Design tools",
    description: "Adobe Creative Suite",
  },
  {
    title: "Project Management Platforms",
    description: "Azure DevOps, Aha!, JIRA, Monday.com, Notion",
  },
];

const certificationList = [
  {
    title: "Canva Essentials",
    description: "Issued Dec 2024",
  },
  {
    title: "Create Inclusive Learning Experiences",
    description: "Issued Oct 2024",
  },
  {
    title: "Statistical Foundations",
    description: "Issued Oct 2024",
  },
  {
    title: "Project Management Foundations",
    description: "Issued Jan 2024",
  },
];

const softSkillsList = [
  {
    className: [
      "!text-2xl !font-montserrat ",
      "!text-xl !font-source-code text-[var(--color-light-bg)]",
    ],
    points: [
      "Integrity",
      "Visionary",
      "Problem Solving",
      "Business Ethics",
      "Relationship Management",
      "Structured Analytical thinking",
      "Decision Making under Ambiguity",
      "Conflict Resolution",
      "High Attention to Detail",
      "Intercultural Collaboration",
      "English Business Communications",
      "Basic Conversational German",
    ],
  },
  {
    title: "Digital Environments:",
    className: [
      "!text-xl !font-montserrat ",
      "!text-lg !font-source-code text-[var(--color-light-bg)]",
    ],
    description:
      "Visual rendrerings, BIM, Common Data Environments, 3D Visualisation, Product Modelling, Design Conceptualisation",
  },
];

function Skills() {
  return (
    <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] sm:py-8 py-4 sm:px-10 px-4 rounded-current font-source-code text-base">
      <div className="grid sm:grid-cols-7 grid-cols-1 gap-5 min-h-[54rem]">
        <div className="col-span-2 flex flex-col gap-4">
          <div className="text-2xl font-montserrat">TECHNICAL SKILLS</div>
          {skillsList.map((skill) => (
            <m.div
              key={skill.title}
              className="flex flex-col"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-xl font-montserrat">{skill.title}</div>
              <div className="text-xl font-source-code text-light-gray">
                {skill.description}
              </div>
            </m.div>
          ))}
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div className="text-2xl font-montserrat">SOFT SKILLS</div>
          {softSkillsList.map((skill, index) => (
            <m.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <DescribeListBlock item={skill} index={index} />
            </m.div>
          ))}
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="text-2xl font-montserrat">CERTIFICATIONS</div>
          {certificationList.map((certification) => (
            <m.div
              key={certification.title}
              className="flex flex-col"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-xl font-montserrat">
                {certification.title}
              </div>
              <div className="text-xl font-source-code text-[var(--color-light-bg)]">
                {certification.description}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
