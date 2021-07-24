import React from "react"
import {HashRouter, Route} from "react-router-dom"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigator from "./components/Navigator"
import Detail from "./components/Detail"

function App(){
  return (
    <HashRouter>
      <Navigator />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie/detail/:id" exact={true} component={Detail} />
    </HashRouter>
  )
}


export default App;
