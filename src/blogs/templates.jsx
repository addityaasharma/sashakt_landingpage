// templates/templates.js
import React from "react";
import TemplateA from "../pages/templates/TemplateA";
import TemplateB from "../pages/templates/TemplateB";
import TemplateC from "../pages/templates/TemplateC";
import blogs from "./blog";
import UniversalTemplate from "../pages/templates/UniversalTemplate";

const templates = {
    education: (props) => <TemplateB blog={blogs.education} {...props} />,
    technology: (props) => <TemplateA blog={blogs.technology} {...props} />,
    finance: (props) => <TemplateC blog={blogs.finance} {...props} />,
    sports: (props) => <UniversalTemplate blog={blogs.sports} {...props} />,
    travel: (props) => <UniversalTemplate blog={blogs.travel} {...props} />,
    food: (props) => <UniversalTemplate blog={blogs.food} {...props} />,
    fashion: (props) => <UniversalTemplate blog={blogs.fashion} {...props} />,
    lifestyle: (props) => <UniversalTemplate blog={blogs.lifestyle} {...props} />,
    fitness: (props) => <UniversalTemplate blog={blogs.fitness} {...props} />,
    gaming: (props) => <UniversalTemplate blog={blogs.gaming} {...props} />,
    business: (props) => <UniversalTemplate blog={blogs.business} {...props} />,
    marketing: (props) => <UniversalTemplate blog={blogs.marketing} {...props} />,
    realestate: (props) => <UniversalTemplate blog={blogs.realEstate} {...props} />,
    music: (props) => <UniversalTemplate blog={blogs.music} {...props} />,
    movies: (props) => <UniversalTemplate blog={blogs.movies} {...props} />,
    books: (props) => <UniversalTemplate blog={blogs.books} {...props} />,
    science: (props) => <UniversalTemplate blog={blogs.science} {...props} />,
    politics: (props) => <UniversalTemplate blog={blogs.politics} {...props} />,
    history: (props) => <UniversalTemplate blog={blogs.history} {...props} />,
    diy: (props) => <UniversalTemplate blog={blogs.diy} {...props} />,
    parenting: (props) => <UniversalTemplate blog={blogs.parenting} {...props} />,
    spirituality: (props) => <UniversalTemplate blog={blogs.spirituality} {...props} />,
    selfimprovement: (props) => <UniversalTemplate blog={blogs.selfImprovement} {...props} />,
    art: (props) => <UniversalTemplate blog={blogs.art} {...props} />,
    photography: (props) => <UniversalTemplate blog={blogs.photography} {...props} />,
    programming: (props) => <UniversalTemplate blog={blogs.programming} {...props} />,
    aiml: (props) => <UniversalTemplate blog={blogs.aiml} {...props} />,
    webdevelopment: (props) => <UniversalTemplate blog={blogs.webdevelopment} {...props} />,
    startups: (props) => <UniversalTemplate blog={blogs.startups} {...props} />,
    crypto: (props) => <UniversalTemplate blog={blogs.crypto} {...props} />,
    environment: (props) => <UniversalTemplate blog={blogs.environment} {...props} />,
    automobiles: (props) => <UniversalTemplate blog={blogs.automobiles} {...props} />,
};

export default templates;
