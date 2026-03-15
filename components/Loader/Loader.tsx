import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{ width: "100%", margin: "20px auto" }}
        wrapperClass="color-ring-wrapper"
        colors={["#c5a4f0", "#9780f4", "#6b62f0", "#3f45ef", "#1330f0"]}
      />
    </div>
  );
};

export default Loader;
