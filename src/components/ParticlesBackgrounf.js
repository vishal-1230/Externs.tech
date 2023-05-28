import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

const ParticlesBackground = () => {
    return (
        <Particles className="particles" params={particlesConfig} />
    )
}
export default ParticlesBackground