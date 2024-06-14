import logo from './logo.png';
import './App.css';
import placeholderBackground from './PlaceholderBackground.gif';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Tail Twist Studios Logo" />
        <h1>Tail Twist Studios </h1>
        <div className="nav-links">
          <a>Projects</a>
          <a>Team</a>
          <a>Contact</a>
          <a>About</a>
        </div>

      </header>
      <body>
        <div className="horizontal-box" style={{
          backgroundImage: `url(${placeholderBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'auto',
        }}>
          <div className="horizontal-box-text horizontal-box-text-left">
            <h2>Latest Project</h2>
            <p>Brisket shankle filet mignon, shoulder chuck meatball shank fatback capicola. Shankle spare ribs burgdoggen venison. Shank jerky bacon porchetta kevin pork loin turkey shoulder leberkas. Jowl beef ribs jerky, beef kielbasa biltong meatball chuck pig flank cow bresaola. Tongue meatloaf strip steak hamburger cupim.</p>
          </div>
        </div>
        <div className="horizontal-box horizontal-box-right" style={{
          backgroundImage: `url(${placeholderBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'auto',
        }}>
          <div className="horizontal-box-text horizontal-box-text-right">
            <h2>Latest Project</h2>
            <p>Brisket shankle filet mignon, shoulder chuck meatball shank fatback capicola. Shankle spare ribs burgdoggen venison. Shank jerky bacon porchetta kevin pork loin turkey shoulder leberkas. Jowl beef ribs jerky, beef kielbasa biltong meatball chuck pig flank cow bresaola. Tongue meatloaf strip steak hamburger cupim.</p>
          </div>
        </div>
      </body >
      <footer>
        <p>Bacon ipsum dolor amet biltong ham leberkas chuck buffalo doner filet mignon, shoulder turkey tongue. Flank chislic prosciutto ham hock picanha beef chuck burgdoggen spare ribs. Meatloaf cow venison, kielbasa pork chop bacon biltong pastrami tri-tip brisket buffalo leberkas shankle swine boudin. Ribeye meatball ball tip pastrami, buffalo prosciutto alcatra venison. Brisket ham sausage ribeye. Pastrami turkey picanha shankle, bacon sausage turducken doner spare ribs rump venison beef ribs pork chop beef pork loin. Short ribs alcatra sirloin, bresaola meatball tail jowl tenderloin pork pastrami jerky pig.</p>
      </footer>


    </div >
  );
}

export default App;
