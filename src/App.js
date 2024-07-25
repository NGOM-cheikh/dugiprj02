import { Link, Route, Routes } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
 const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Med MÃ¹s</li>
    </ul>
  </div>
 )

 const Cities = () => (
  <div>
    <ul>
      <li>Paris </li>
      <li>Dakar</li>
      <li>Rabah</li>
    </ul>
  </div>
 )
/**
 * courses est un composant avec un sous menu ( c'est un route fille)
 * Je suis obligé maintenant de mettre juste le mot du route fille 
 * @param {*} param0 
 * @returns 
 */
 const Courses = ({match}) => (
  <div>
    <ul>
      <li><Link to="/cos/techno">Technology</Link></li>
      <li><Link to="/cos/bio">Biologie</Link></li>
      <li><Link to="/cos/meca">Mécanique</Link></li>
      </ul>
    <Routes>
      <Route path="techno" element={<div>Ce sont les Technos</div>} exact/>
      <Route path="bio" element={<div>C'est Bio !'</div>} />
      <Route path="meca" element={<div>MÃ©canique</div>} />
    </Routes>
  </div>
)

/**
 *  <Route path="/cos/*" Component={Courses}/> /cos/* pour donner les droits d'accÃ©s aux "routes filles"
 * @returns 
 */
function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cos">Courses</Link></li>
        <li><Link to="/airports">Aéroports</Link></li>
        <li><Link to="/cities">Villes</Link></li>
      </ul>
      <Routes>
        <Route path="/" Component={Home} exact/>
        <Route path="/airports" 
          element=
          {<div><b>Aéroports</b><Airport/></div>}
        />
        <Route path="/cities" Component={Cities}/>
        <Route path="/cos/*" Component={Courses}/>
      </Routes>
    </div>
  );
}
/**
 * 
 * @returns <Route path="/airports" Component={Airport}/>
 */

export default App;
