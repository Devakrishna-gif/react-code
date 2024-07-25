import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement('h1', { id: 'parent', xyz: 'abc' }, [React.createElement('div', { id: 'child' }, [React.createElement('h1', {}, 'This is h1 tag'), React.createElement('h2', {}, 'This is h2 tag')]), React.createElement('div', { id: 'child2' }, [React.createElement('h1', {}, 'This is h1 tag'), React.createElement('h2', {}, 'This is h2 tag')])]);
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);