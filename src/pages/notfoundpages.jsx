import { Container } from "react-bootstrap";
import Footer from "../components/footer/footer";
import Navigation from "../components/navigation/navigation";
import NotFound from "../components/notFound/notFound";

function NotPages(){
    let bb = "console.log('hello')";
    console.log(bb);
    return (
        <div>
            <Navigation />
            <Container className="text-center mt-6" >
                <NotFound  />
            </Container>
            <Footer />
        </div>
    );
}

export default NotPages;