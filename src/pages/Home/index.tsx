import { Button } from '@/components/Button'
import {
  ArrowsLeftRight,
  Globe,
  GlobeHemisphereWest,
  Plug,
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
  Readers,
  ReadersContainer,
  ReadersWrapper,
  Topic,
  TopicsContainer,
  TopicsWrapper,
} from './styles'
import { Reader } from '@/components/Reader'
import { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const titleIntroRef = useRef(null)
  const descriptionIntroRef = useRef(null)
  const buttonIntroRef = useRef(null)

  const comment01Ref = useRef(null)
  const comment02Ref = useRef(null)

  useEffect(() => {
    const titleIntro = titleIntroRef.current
    const descriptionIntro = descriptionIntroRef.current
    const buttonIntro = buttonIntroRef.current

    const comment01 = comment01Ref.current
    const comment02 = comment02Ref.current

    const tl = gsap.timeline({ defaults: { duration: 1 } })

    tl.fromTo(
      titleIntro,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
      .fromTo(
        descriptionIntro,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
        '-=0.75'
      )
      .fromTo(
        buttonIntro,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
        '-=0.75'
      )

    gsap.fromTo(
      [comment01, comment02],
      {
        opacity: 0,
        rotateY: 180,
      },
      {
        opacity: 1,
        rotateY: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: [comment01, comment02],
          start: 'top 90%',
          end: 'top 80%',
          scrub: true, // Desliza conforme o scroll
          // markers: true,
        },
      }
    )
  })

  return (
    <HomeContainer>
      <IntroContainer>
        <IntroWrapper>
          <img src="/images/intro.svg" alt="" />
          <div>
            <h1 ref={titleIntroRef}>Redes TCP IP</h1>
            <p ref={descriptionIntroRef}>
              Descomplicando redes: aprenda tudo sobre TCP, IPv4, IPv6, portas e
              UDP de forma simples e objetiva.
            </p>
            <Button type="button" ref={buttonIntroRef}>
              Leia mais
            </Button>
          </div>
        </IntroWrapper>
      </IntroContainer>

      <TopicsContainer>
        <TopicsWrapper>
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
                  Diferenças e funcionamento do Three-Way Handshake e controle
                  de fluxo
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
        </TopicsWrapper>
      </TopicsContainer>

      <PreviewContainer>
        <PreviewWrapper>
          <img src="/images/reading-book.svg" alt="" />
          <div>
            <h1>Prévia Grátis</h1>
            <p>
              Este não é apenas um livro, mas um guia completo para dominar
              redes de forma rápida e sem complicações. Leia agora a prévia
              gratuita e veja como simplificamos conceitos complexos para você.
            </p>

            <Button type="button">Leia mais</Button>
          </div>
        </PreviewWrapper>
      </PreviewContainer>

      <ReadersContainer>
        <ReadersWrapper>
          <h1>O que os leitores dizem?</h1>
          <Readers>
            <Reader
              ref={comment01Ref}
              name="Edilaine Santos"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi
          purus, semper vel auctor eget, dapibus ac dui. Quisque semper justo
          bibendum porta lobortis."
            />
            <Reader
              ref={comment02Ref}
              name="Edilaine Santos"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mi
          purus, semper vel auctor eget, dapibus ac dui. Quisque semper justo
          bibendum porta lobortis."
            />
          </Readers>
        </ReadersWrapper>
      </ReadersContainer>

      {/* 
            <NoteContainer>

            </NoteContainer>

            <PriceContainer>

            </PriceContainer> */}
    </HomeContainer>
  )
}
