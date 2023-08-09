import { Link } from "react-router-dom";

const links = ["Benefits", "Templates", "FAQ"];
const products = ["Account & Payment", "Pricing", "Contacts"];
const Legal = ["Privacy Policy", "Terms of Use"];

function Navigation() {
  const createNavigationFooter = (mainText, array) => {
    return (
      <div>
        <p className="fs-1m ln-xl fw-700 color-white mb-xs">{mainText}</p>
        <ul>
          {array.map((item, i) => {
            return (
              <li key={i} className="mb-xs">
                <Link href="#" className="fs-m ln-m fw-400 color-grey400">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      {createNavigationFooter("Quick Links", links)}
      {createNavigationFooter("Product", products)}
      {createNavigationFooter("Legal", Legal)}
    </>
  );
}

export default Navigation;
