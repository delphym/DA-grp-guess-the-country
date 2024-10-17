function App() {
  return (
    <div>
      <nav>This is NAV bar</nav>
      <main>
        <h1>Guess the Country</h1>
        <p>React development has begun!</p>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="http://delphym-mania-chc-24-worldwide-routing.devacademy.nz/">
              Need some learning?
            </a>
          </li>
          <li>
            <a href="#credit">Credit</a>
          </li>
        </ul>
      </main>
      <footer id="credit">
        This game is proudly <b>Brought to You by The-A-Team</b>!
        <div>
          <img src="/images/a-team-smile.gif" alt="The-A-Team" />
        </div>
      </footer>
    </div>
  )
}

export default App
