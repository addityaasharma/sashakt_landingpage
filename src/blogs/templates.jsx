// templates/templates.js
import React from "react";
import TemplateA from "../pages/templates/TemplateA";
import TemplateB from "../pages/templates/TemplateB";
import TemplateC from "../pages/templates/TemplateC";
import blogs from "./blog";

const templates = {
    education: (props) => <TemplateB blog={blogs.education} {...props} />,
    technology: (props) => <TemplateA blog={blogs.technology} {...props} />,
    finance: (props) => <TemplateC blog={blogs.finance} {...props} />,
};

export default templates;
