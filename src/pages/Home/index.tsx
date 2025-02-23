import { Button } from '@/components/Button'
import {
  ArrowsLeftRight,
  Globe,
  GlobeHemisphereWest,
  Plug,
  ShareNetwork,
  Stack,
} from 'phosphor-react'
import {
  HomeContainer,
  IconContainer,
  IntroContainer,
  IntroWrapper,
  NoteContainer,
  PreviewContainer,
  PreviewWrapper,
  PriceContainer,
  ReadersContainer,
  Topic,
  TopicsContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroWrapper>
          <img src="/images/intro.svg" alt="" />
          <div>
            <h1>Redes TCP IP</h1>
            <p>
              Descomplicando redes: aprenda tudo sobre TCP, IPv4, IPv6, portas e
              UDP de forma simples e objetiva.
            </p>
            <Button type="button">Leia mais</Button>
          </div>
        </IntroWrapper>
      </IntroContainer>

      <TopicsContainer>
        <h1>Tópicos abordados</h1>
        <ul>
          <li>
            <Topic>
              <IconContainer>
                <GlobeHemisphereWest size={32} />
              </IconContainer>
              <h2>Origem</h2>
              <p>Breve história do TCP/IP e sua evolução</p>
            </Topic>
          </li>

          <li>
            <Topic>
              <IconContainer>
                <Stack size={32} />
              </IconContainer>
              <h2>Modelo OSI e TCP</h2>
              <p>Como as camadas se organizam</p>
            </Topic>
          </li>

          <li>
            <Topic>
              <IconContainer>
                <Globe size={32} />
              </IconContainer>
              <h2>IPv4 e IPv6</h2>
              <p>
                Estrutura dos endereços, máscaras e sub-redes. NAT, DHCP e
                transição de IPv4 para IPv6
              </p>
            </Topic>
          </li>

          <li>
            <Topic>
              <IconContainer>
                <ArrowsLeftRight size={32} />
              </IconContainer>
              <h2>TCP & UDP</h2>
              <p>
                Diferenças e funcionamento do Three-Way Handshake e controle de
                fluxo
              </p>
            </Topic>
          </li>

          <li>
            <Topic>
              <IconContainer>
                <Plug size={32} />
              </IconContainer>
              <h2>Identificação e Serviços</h2>
              <p>O que são portas e como funcionam os sockets</p>
            </Topic>
          </li>
        </ul>
      </TopicsContainer>

      {/* <PreviewContainer>
        <PreviewWrapper>
          <img src="/images/cover.jpg" alt="" />
          <div>
            <h1>Prévia Grátis</h1>
            <p>
              Este não é apenas um livro, mas um guia completo para dominar
              redes de forma rápida e sem complicações. Leia agora o primeiro
              capítulo gratuito e veja como simplificamos conceitos complexos
              para você.
            </p>

            <Button type="button">Leia mais</Button>
          </div>
        </PreviewWrapper>
      </PreviewContainer> */}

      {/* 

            <NoteContainer>

            </NoteContainer>

            <ReadersContainer>
                <div>reader a</div>
                <div>reader b</div>
            </ReadersContainer>

            <PriceContainer>

            </PriceContainer> */}
    </HomeContainer>
  )
}
