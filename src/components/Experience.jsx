import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { TableSetup } from "./TableSetup";
import NeonLogo from "../assets/neon-green.png";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls makeDefault />

      {/* Table */}
      <TableSetup />
      {/* <PerspectiveCamera makeDefault fov={3} position={[60, 20, 10]} /> */}
      <PerspectiveCamera makeDefault fov={2.5} position={[40, 20, -40]} />

      {/* Neon Light */}
      <Html makeDefault>
        <img src={NeonLogo} alt="Neon Light Green" />
      </Html>
    </>
  );
};

export default Experience;
