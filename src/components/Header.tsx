import { RiMenu4Fill, RiMic2Line, RiSearch2Line, RiUser4Line } from "react-icons/ri";

const Header = () => {
  const styles = {
    button: "text-primary text-2xl",
    searchBox:
      "flex gap-1 justify-center items-center bg-transparent border border-1 border-primary pr-2 text-lg text-primary outline-none",
  };
  return (
    <header className="col-span-12 flex justify-between p-2 px-4 pb-3 pt border-0 border-b-2 border-primary">
      <button className={styles.button}>
        <RiMenu4Fill />
      </button>
      <div className="searchContainer flex gap-2">
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent p-2 outline-none"
          />
          <button className={styles.button}>
            <RiSearch2Line />
          </button>
        </div>
        <button className={styles.button + " border border-1 border-primary px-2"}>
            <RiMic2Line />
        </button>
      </div>
      <button className={styles.button}>
        <RiUser4Line />
      </button>
    </header>
  );
};

export default Header;
