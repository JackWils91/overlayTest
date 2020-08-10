import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { Layout } from "antd";
const { Footer } = Layout;

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = () => {
  return (
    <Layout>
      <Footer style={{ margin: "24 24" }}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={2000}
          infinite={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </AutoplaySlider>
      </Footer>
    </Layout>
  );
};

export default slider;
