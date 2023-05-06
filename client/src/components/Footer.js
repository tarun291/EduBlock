import "../styles/Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <p>&copy;{year} Team GKV </p>
      <div className="links">
        <a href="https://github.com/tarun291/EduBlock.git" rel="noreferrer" target="_blank">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
