import 'materialize-css/dist/css/materialize.min.css';
import '../navbar/navbar.css'
function Navbar() {

    return (
        <div>
            <div className="container-fluid" id="Navbar">
                <div className="row">
                    <div className="col s1">
                        <h5 id="navheading">Jenkins</h5>
                    </div>
                    <div className="col s1">
                        <h6 id="navheading2">cd</h6>
                    </div>
                    <div className="col s1"></div>
                    <div className="col s6 options"><a href="https://www.jenkins.io/node/">Blog</a>
                    <a href="">Documentation</a>
                    <a href="https://plugins.jenkins.io/">Plugins</a>
                    <a href="">Community</a>
                    <a href="">Subprojects</a>
                    <a href="">About</a>
                
                    </div>
                    <div className="col s1" id="bt"><button id="download">download</button></div>
                    <div className="col s2" id="sear"><input type="search" placeholder="search" id="bg"/></div>
                    
                    
                </div>
            </div>
        </div>
    );

}
export default Navbar;