import AppLayout from "../../components/appLayout/AppLayout";

const WithAuth = ({ WrappedComponent }) => {
  //   const { user } = useContext(AuthContext);

  return <AppLayout wrappedComponent={WrappedComponent} />;
};

export default WithAuth;
