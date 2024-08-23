import Link from "next/link";
import S from "@/styles/common.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faBlogger } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <address>
        <p>&copy;2024&#46;SeoyoungPark</p>
        <div>
          <Link
            href="https://github.com/seokachu/TodoList-Next-Ver"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </Link>
          <Link
            href="https://seokachu.tistory.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faBlogger} />
          </Link>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
