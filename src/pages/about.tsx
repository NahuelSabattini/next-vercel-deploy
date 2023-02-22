import MainLayaout from 'components/layaouts/MainLayout';
import DarkLayout from "components/layaouts/DarkLayout";


 
const About = () => {
    return ( 
        <>

            <div className="container">
                <h1 className="title">About</h1>
            </div>
        </>
     );
}
 
export default About;

About.getLayout = function getLayout(page: JSX.Element){

    return(
        <MainLayaout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayaout>
    )

}
