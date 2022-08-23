function Foot(props) {
  return (
    <footer className={props.darkMode ? "dark" : ""}>
      <small>
        Project by{" "}
        <a href="https://scrimba.com/" target="_blank" rel="noreferrer">
          Scrimba
        </a>
        .<br /> Coded with ❤️ by{" "}
        <a href="https://github.com/RajeshxD" target="_blank" rel="noreferrer">
          Rajesha T
        </a>
        .
      </small>
    </footer>
  );
}

export default Foot;
