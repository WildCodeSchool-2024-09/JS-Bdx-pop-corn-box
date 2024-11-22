import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const navElement = navRef.current as HTMLElement | null;
      if (
        navElement &&
        !navElement.contains(target) &&
        target !== document.querySelector(".hamburger-icon")
      ) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={visible ? "listHamburger active" : "listHamburger"}
      >
        <Link to="/" onClick={() => setVisible(false)}>
          Accueil
        </Link>
        <Link to="/Movies" onClick={() => setVisible(false)}>
          Films
        </Link>
        <Link to="/series" onClick={() => setVisible(false)}>
          Series
        </Link>
        <Link to="/animes" onClick={() => setVisible(false)}>
          Animes
        </Link>
        <Link to="/WatchList" onClick={() => setVisible(false)}>
          WatchList
        </Link>
      </nav>
      <FontAwesomeIcon
        icon={faBars}
        onClick={handleClick}
        className="hamburger-icon"
      />
    </>
  );
}
