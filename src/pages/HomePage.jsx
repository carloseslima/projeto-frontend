import Galery from "../components/Galery";
import Section from "../components/Section";
import Layout from "./Layout";



const HomePage = () => {
    return (
        <Layout>
            <Galery />

            <Section title="Coleção em destaque" titleAlign="center" link="">
                <div id="collection-images">
                    <a href="#">
                        <img src="/collection-1.png" alt="Coleção em destaque" />
                    </a>
                    <a href="#">
                        <img src="/collection-2.png" alt="Coleção em destaque" />
                    </a>
                    <a href="#">
                        <img src="/collection-3.png" alt="Coleção em destaque" />
                    </a>
                </div>
            </Section>

        </Layout >
    );
}

export default HomePage;