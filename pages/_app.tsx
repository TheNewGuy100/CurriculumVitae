// DEFAULT
import { AppProps } from 'next/app';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css'

// RADIX
import '@radix-ui/react-label';

// GLOBAL (LOAD LAST)
import '../src/styles/globals.scss'

// GLOBAL COMPONENTS
import HeadInformationComponent from '@components/headInformation/headInformation.component.'
import FooterComponent from '@components/footer/footer.component'

export default function MyApp (
  {Component, pageProps}: any
): JSX.Element {
  return (
    <>
      {/* COMPONENTE QUE ADICIONA NOSSO HEAD COM INFORMAÇÕES */}
      <HeadInformationComponent>
        {/* COMPONENTE QUE CRIA O FOOTER DA PÁGINA (FAZER EXCUSSÃO CASO SEJA A HOME) */}
        <FooterComponent>
          <Component {...pageProps}/>
        </FooterComponent>
      </HeadInformationComponent>
    </>
  )
}