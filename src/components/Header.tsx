import { RiMenu4Fill, RiMic2Line, RiSearch2Line, RiUser4Line } from "react-icons/ri";
import {useSession} from "next-auth/react"
import SigninButton from "./auth/SigninButton";

const Header = () => {
  const styles = {
    button: "text-primary text-2xl col-span-2 md:col-span-1",
    searchBox:
      " col-span-10 md:col-span-6 grid grid-cols-12 gap-1 justify-center items-center bg-transparent border border-1 border-primary pr-2 text-lg text-primary outline-none",
  };
  return (
    <header className="col-span-12 grid grid-cols-12 justify-between p-2 px-4 pb-3 pt border-0 border-b-2 border-primary">
      <button className={styles.button}>
        <RiMenu4Fill />
      </button>
      
      <div className="searchContainer gap-2 col-span-10 grid-cols-12 grid">
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            className="col-span-10 md:col-span-11 bg-transparent p-2 outline-none"
          />
          <button className={styles.button}>
            <RiSearch2Line />
          </button>
        </div>
        <button className={styles.button + " col-span-2 md:col-span-1 md:flex md:justify-center md:items-center border border-1 border-primary px-1 lg:px-2"}>
            <RiMic2Line />
        </button>
      </div>
      <div className={styles.button+"  hidden md:flex justify-center items-center col-span-1"}>
      <SigninButton />
      </div>
    </header>
  );
};

export default Header;
