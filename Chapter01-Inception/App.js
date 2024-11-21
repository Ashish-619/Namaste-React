// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from React");

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("b", {}, " I am Bold"),
        React.createElement("br"),
        React.createElement("i", {}, "I am Italic")
    ]),
]);

console.log(parent);

const roottwo = ReactDOM.createRoot(document.getElementById("root"));
roottwo.render(parent);