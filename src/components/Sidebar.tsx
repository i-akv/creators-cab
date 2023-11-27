import Link from "next/link";

import {
  RiThumbUpLine,
  RiTimeLine,
  RiUploadLine,
  RiVideoLine,
  RiUploadCloud2Line,
} from "react-icons/ri";

const Sidebar = () => {
  const styles = {
    navLink: "grid grid-cols-12 py-2 gap-1 items-center",
    navLinkIcon: "col-span-2 pl-1 flex text-xl justify-end",
    navLinkText: "col-span-10 text-lg text-left pl-1",
  };
  return (
    <section className="col-span-3 p-2 flex flex-col border-r-2 border-primary h-screen">
      <Link
        className="text-xl p-2 gap-2 flex justify-center items-center bg-primary text-black"
        href={"#"}
      >
        <RiUploadLine />
        Upload
      </Link>

      <hr className="mt-2 border-primary" />

      <Link className={styles.navLink} href={"#"}>
        <div className={styles.navLinkIcon}>
          <RiThumbUpLine />
        </div>
        <span className={styles.navLinkText}>Liked Videos</span>
      </Link>

      <Link className={styles.navLink} href={"#"}>
        <div className={styles.navLinkIcon}>
          <RiTimeLine />
        </div>

        <span className={styles.navLinkText}>Watch Later</span>
      </Link>

      <Link className={styles.navLink} href={"#"}>
        <div className={styles.navLinkIcon}>
          <RiUploadCloud2Line />
        </div>
        <span className={styles.navLinkText}>Uploads</span>
      </Link>

      <Link className={styles.navLink} href={"#"}>
        <div className={styles.navLinkIcon}>
          <RiVideoLine />
        </div>
        <span className={styles.navLinkText}>Subscriptions</span>
      </Link>
    </section>
  );
};

export default Sidebar;
