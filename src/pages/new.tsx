import LayoutTest from "components/layaouts/LayoutTest";
import MainLayaout from "components/layaouts/MainLayout";
import { FunctionComponent } from "react";

const New= () => {
    return ( 
        <>
            <div className="container">
                <h1 className="title">NEW</h1>
            </div>
        </>
     );
}
 
export default New;

New.getLayout = function getLayout(page: any){
    return (
        <MainLayaout>
            <LayoutTest>
                {page}
            </LayoutTest>
        </MainLayaout>

    )
}