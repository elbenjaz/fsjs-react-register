import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFacebook, faGithub, faLinkedin);

import Registro from "./components/Registro";

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

const App = () => <Registro/>;

export default App;
