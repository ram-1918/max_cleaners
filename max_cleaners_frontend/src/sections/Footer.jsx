import Copyrights from "../components/Copyrights";
import Logo from "../components/Logo";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#03001C"}} className="w-full h-64 flex flex-col justify-between items-center p-4 text-white font-light">
        <span className="text-2xl">About Us</span>
        <div className="flex flex-col space-y-2 justify-center items-center">
            <Logo text="7.99 Cleaners" color="white" />
            <span>maxcleaners@gmail.com</span>
            <span>+1 (716) 617-1918</span>
            <span>1 Ethel Rd, Edison, NJ, 08817</span>
        </div>
        <Copyrights color="white" />
    </footer>
  );
}