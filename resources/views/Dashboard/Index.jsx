'use strict';
const React = require('react');
const ReactDOM = require('react-dom/client');

class App extends React.Component {
    render() {
        return <div>esto es dashboard</div>;
    }
}

function init() {
    const main = document.getElementsByTagName('main')[0];
    const root = ReactDOM.createRoot(main);
    root.render(<App/>);
}

init();