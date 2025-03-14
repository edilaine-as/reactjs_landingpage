import { Button } from '@/components/Button'
import {
  ArrowsLeftRight,
  Globe,
  GlobeHemisphereWest,
  Plug,
  Stack,
} from 'phosphor-react'
import {
  Heading,
  HomeContainer,
  IconContainer,
  IntroContainer,
  IntroWrapper,
  PreviewContainer,
  PreviewWrapper,
  PriceContainer,
  PriceContent,
  PriceWrapper,
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

  const topicsRef = useRef(null)
  const topic01Ref = useRef(null)
  const topic02Ref = useRef(null)
  const topic03Ref = useRef(null)
  const topic04Ref = useRef(null)
  const topic05Ref = useRef(null)

  const previewImgRef = useRef(null)
  const previewDivRef = useRef(null)

  const comment01Ref = useRef(null)
  const comment02Ref = useRef(null)

  const titleReadersRef = useRef(null)

  useEffect(() => {
    const titleIntro = titleIntroRef.current
    const descriptionIntro = descriptionIntroRef.current
    const buttonIntro = buttonIntroRef.current

    const topics = topicsRef.current
    const topic01 = topic01Ref.current
    const topic02 = topic02Ref.current
    const topic03 = topic03Ref.current
    const topic04 = topic04Ref.current
    const topic05 = topic05Ref.current

    const comment01 = comment01Ref.current
    const comment02 = comment02Ref.current

    const previewImg = previewImgRef.current
    const previewDiv = previewDivRef.current

    const titleReaders = titleReadersRef.current

    const tl = gsap.timeline({ defaults: { duration: 1 } })

    // INTRO
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

    // TOPICS
    gsap.fromTo(
      topics,
      {
        opacity: 0,
        y: 100,
        transform: 'translateZ(0)',
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: topics,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      [topic01, topic04],
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: topic01,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      topic03,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: topic01,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    // PREVIEW
    gsap.fromTo(
      previewImg,
      {
        opacity: 0,
        x: -170,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: previewDiv,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      previewDiv,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: previewDiv,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      [topic02, topic05],
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: topic01,
          start: 'top 95%',
          end: 'top 75%',
          scrub: true,
        },
      }
    )

    // READERS
    gsap.fromTo(
      titleReaders,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: [titleReaders],
          start: 'top 95%',
          end: 'top 75%',
          scrub: true, // Desliza conforme o scroll
        },
      }
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
        ease: 'power4.out',
        scrollTrigger: {
          trigger: [comment01, comment02],
          start: 'top 95%',
          end: 'top 65%',
          scrub: true,
          // markers: true,
        },
      }
    )
  }, [])

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
          <Heading ref={topicsRef}>Tópicos abordados</Heading>
          <ul>
            <li>
              <Topic ref={topic01Ref}>
                <IconContainer>
                  <GlobeHemisphereWest size={32} />
                </IconContainer>
                <h2>Origem</h2>
                <p>Breve história do TCP/IP e sua evolução</p>
              </Topic>
            </li>

            <li>
              <Topic ref={topic02Ref}>
                <IconContainer>
                  <Stack size={32} />
                </IconContainer>
                <h2>Modelo OSI e TCP</h2>
                <p>Como as camadas se organizam</p>
              </Topic>
            </li>

            <li>
              <Topic ref={topic03Ref}>
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
              <Topic ref={topic04Ref}>
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
              <Topic ref={topic05Ref}>
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
          <img ref={previewImgRef} src="/images/reading-book.svg" alt="" />
          <div ref={previewDivRef}>
            <h1>Prévia Grátis</h1>
            <p>
              Este não é apenas um livro, mas um guia completo para dominar
              redes de forma rápida e sem complicações. Leia agora a prévia
              gratuita e veja como simplificamos conceitos complexos para você.
            </p>

            <Button type="button">Acessar</Button>
          </div>
        </PreviewWrapper>
      </PreviewContainer>

      <ReadersContainer>
        <ReadersWrapper>
          <Heading ref={titleReadersRef}>O que os leitores dizem?</Heading>
          <Readers>
            <Reader
              ref={comment01Ref}
              image="https://github.com/edilaine-as.png"
              name="Edilaine Santos"
              message="O livro explica de forma simples e objetiva, sem complicação. Recomendo para quem quer aprender redes de verdade!"
              position="left"
            />
            <Reader
              ref={comment02Ref}
              image="https://github.com/shadcn.png"
              name="John Doe"
              message="Sempre tive dificuldade com IPv4 e IPv6, mas esse eBook tornou tudo muito mais claro. Vale muito a pena!"
              position="right"
            />
          </Readers>
        </ReadersWrapper>
      </ReadersContainer>

      <PriceContainer>
        <PriceWrapper>
          <PriceContent>
            <h1>Adquira agora!</h1>
            <p>Apenas $9.99</p>
            <ul>
              <li>Um guia completo e direto ao ponto sobre redes</li>
              <li>Conceitos explicados de forma simples e prática</li>
              <li>Tenha tudo o que precisa na palma da mão!</li>
            </ul>
            <p>Baixe agora e domine os fundamentos de redes!</p>
            <div>
              <Button type="button">Quero meu eBook</Button>
            </div>
          </PriceContent>
          <img src="/images/tablet.svg" alt="" />
        </PriceWrapper>
      </PriceContainer>
    </HomeContainer>
  )
}
