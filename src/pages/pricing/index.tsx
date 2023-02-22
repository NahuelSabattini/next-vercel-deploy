import MainLayaout from "components/layaouts/MainLayout";

const Pricing = () => {
  return (
    <>
      <h3>Pricing</h3>
    </>
  );
};

export default Pricing;

Pricing.getLayout = function (page: any) {
  return <MainLayaout>{page}</MainLayaout>;
};
