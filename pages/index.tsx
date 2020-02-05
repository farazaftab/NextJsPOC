import fetch from 'isomorphic-unfetch'
import HelloWorld from '../component/hello-world'

function HomePage({stars }: any) {
    return (
        <div>
            <p>Hello Next.js</p>
            <a href="/about"> goto About </a>
           Hello---  {process.env.TEST_VAR}
           Next stars: {stars}
           <HelloWorld/>
        </div>
    );
}

HomePage.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }


export default HomePage