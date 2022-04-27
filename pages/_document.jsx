import Document, {Html, Head, Main, NextScript} from "next/document"

export default class CustomDocument extends Document {
    render(){
        return (
          <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
        )
    }
}