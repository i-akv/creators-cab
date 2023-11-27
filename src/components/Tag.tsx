import Link from "next/link"

const Tag = ({title="tag", href="#"}) => {
  return (
    <Link className="bg-primary text-black text-sm px-1 cursor-pointer" href={href}>{title}</Link>
  )
}

export default Tag