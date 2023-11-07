import Encabezado from "@/components/atoms/Encabezado";
import Image from "next/image";
import { ajedrezList } from "./data";
import Lista from "@/components/molecules/Lista";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <Lista list={ajedrezList} />
    </div>
  );
}
