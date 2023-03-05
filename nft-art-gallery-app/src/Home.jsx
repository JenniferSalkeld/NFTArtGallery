import {
  AppMainContainer,
  AppHeader,
  AppSubHeader,
} from "./Components/AppComponents";
import Gallery from "./Components/Gallery";
//this to navigate to other pages
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <AppMainContainer className="App">
      <AppHeader>NFT Art Gallery</AppHeader>
      <AppSubHeader>Click on the Heart to pin your Images</AppSubHeader>
      <Gallery />
      <div className="btn-pins" onClick={() => navigate("/pins")}>
        See Pinned Items
      </div>
    </AppMainContainer>
  );
}

export default Home;
