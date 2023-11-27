import Link from "next/link";
import "./Sidebar.css";

import {
  RiThumbUpLine,
  RiTimeLine,
  RiUploadLine,
  RiVideoLine,
  RiUploadCloud2Line,
  RiHistoryLine,
  RiHome2Line,
} from "react-icons/ri";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link
        className="text-xl p-2 gap-2 flex justify-center items-center border-primary border border-1 hover:bg-primary text-primary hover:text-black"
        href={"#"}
      >
        <RiUploadLine />
        Upload
      </Link>

      <hr className="separator" />

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiHome2Line />
        </div>
        <span className="sidelinktitle">Home</span>
      </Link>

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiThumbUpLine />
        </div>
        <span className="sidelinktitle">Liked Videos</span>
      </Link>

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiTimeLine />
        </div>

        <span className="sidelinktitle">Watch Later</span>
      </Link>

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiUploadCloud2Line />
        </div>
        <span className="sidelinktitle">Uploads</span>
      </Link>

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiVideoLine />
        </div>
        <span className="sidelinktitle">Subscriptions</span>
      </Link>

      <Link className="sidelink" href={"#"}>
        <div className="sidelinkicon">
          <RiHistoryLine />
        </div>
        <span className="sidelinktitle">History</span>
      </Link>

      <hr className="separator" />


    </section>
  );
};

export default Sidebar;
