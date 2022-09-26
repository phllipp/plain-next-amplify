import {GetServerSideProps, NextPage} from "next";

const SSRPage: NextPage = (props, context) => {
  return <>
    <h1>SSR page</h1>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </>
}

export default SSRPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const cats = await fetch('https://cataas.com/api/cats?tags=cute').then((response) => {
    return response.json();
  })

  // const cats = catsData.json();


  return {
    props: {
      cats
    },
  };
}
