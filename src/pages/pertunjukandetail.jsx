import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import Detail from "../components/pertunjukan/detail/detail";



const PertunjukanDetail = () => {
  return (
    <div>
        <Navigation />
            <Detail className="bg-color-five" />
        <Footer />
    </div>
  );
};

export default PertunjukanDetail;