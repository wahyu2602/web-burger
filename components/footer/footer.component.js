import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-warning py-5">
      <p className="text-center">@Wahyudin | Design by
        <Link href="https://www.freepik.com/psd/food" passHref>
          <a target="_blank"> Food psd created by freepik - www.freepik.com</a>
        </Link></p>
    </footer>
  )
}