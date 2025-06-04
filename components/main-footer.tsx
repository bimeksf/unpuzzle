
import Link from "next/link";

export default function MainFooter(){
    return <>
    
    <div className="flex justify-between mx-4 pb-6"> 
       
       <p>support@unpuzzle.com</p>

        <Link href={"/terms"} className="hover:underline">Terms & Conditions</Link>

    </div>
    
    
    
    </>
}