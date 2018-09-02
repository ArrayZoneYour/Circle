import * as React from "react";
import * as ReactDOM from "react-dom";

// Import the global css from here (especially antd, because it doesn't support css module!!!)
import "./App.less";

import Layout from './layouts';

ReactDOM.render(
    <Layout />,
    document.getElementById("root")
);
