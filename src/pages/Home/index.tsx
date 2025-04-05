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
import { useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heading } from '@/components/Heading'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const topicsData = [
    {
      id: '1',
      icon: <GlobeHemisphereWest size={32} />,
      title: 'Origem',
      text: 'Breve história do TCP/IP e sua evolução',
    },
    {
      id: '2',
      icon: <Stack size={32} />,
      title: 'Modelo OSI e TCP',
      text: 'Como as camadas se organizam',
    },
    {
      id: '3',
      icon: <Globe size={32} />,
      title: 'IPv4 e IPv6',
      text: 'Estrutura dos endereços, máscaras e sub-redes. NAT, DHCP e transição de IPv4 para IPv6',
    },
    {
      id: '4',
      icon: <ArrowsLeftRight size={32} />,
      title: 'IPv4 e IPv6',
      text: 'Diferenças e funcionamento do Three-Way Handshake e controle de fluxo',
    },
    {
      id: '5',
      icon: <Plug size={32} />,
      title: 'Identificação e Serviços',
      text: 'O que são portas e como funcionam os sockets',
    },
  ]

  const titleIntroRef = useRef(null)
  const descriptionIntroRef = useRef(null)
  const buttonIntroRef = useRef(null)

  const topicsRef = useRef(null)
  const topicsRefs = useRef<(HTMLDivElement | null)[]>([])

  const previewImgRef = useRef(null)
  const previewDivRef = useRef(null)

  const comment01Ref = useRef(null)
  const comment02Ref = useRef(null)

  const titleReadersRef = useRef(null)

  const priceImgRef = useRef(null)
  const priceDivRef = useRef(null)

  const topicAnimations = [
    { refIndex: 0, y: 100 }, // topic01
    { refIndex: 1, y: 100 }, // topic02
    { refIndex: 2, y: 100 }, // topic03
    { refIndex: 3, y: 100 }, // topic04
    { refIndex: 4, y: 100 }, // topic05
  ]

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.3 } })

    // INTRO
    tl.fromTo(
      titleIntroRef.current,
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
        descriptionIntroRef.current,
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
        buttonIntroRef.current,
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
      topicsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: topicsRef.current,
          start: 'top 95%',
          end: 'top 45%',
          scrub: true,
        },
      }
    )

    // Animação individual para cada tópico
    // biome-ignore lint/complexity/noForEach: <explanation>
    topicAnimations.forEach(({ refIndex, y }) => {
      if (topicsRefs.current[refIndex]) {
        gsap.fromTo(
          topicsRefs.current[refIndex],
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: topicsRefs.current[refIndex],
              start: 'top 95%',
              end: 'top 45%',
              scrub: true,
            },
          }
        )
      }
    })

    // PREVIEW
    gsap.fromTo(
      previewImgRef.current,
      {
        opacity: 0,
        x: -170,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: previewDivRef.current,
          start: 'top 95%',
          end: 'top 45%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      previewDivRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: previewDivRef.current,
          start: 'top 95%',
          end: 'top 45%',
          scrub: true,
        },
      }
    )

    // READERS
    gsap.fromTo(
      titleReadersRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: [titleReadersRef.current],
          start: 'top 95%',
          end: 'top 45%',
          scrub: true, // Desliza conforme o scroll
        },
      }
    )

    gsap.fromTo(
      comment01Ref.current,
      {
        opacity: 0,
        rotateY: -90,
        transformPerspective: 2500,
        transformOrigin: 'left center',
        backfaceVisibility: 'hidden',
      },
      {
        opacity: 1,
        rotateY: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: comment01Ref.current,
          start: 'top 95%',
          end: 'top 65%',
          scrub: true,
          // markers: true,
        },
      }
    )

    gsap.fromTo(
      comment02Ref.current,
      {
        opacity: 0,
        rotateY: -90,
        transformPerspective: 2500,
        transformOrigin: 'left center',
        backfaceVisibility: 'hidden',
      },
      {
        opacity: 1,
        rotateY: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: comment02Ref.current,
          start: 'top 95%',
          end: 'top 65%',
          scrub: true,
          // markers: true,
        },
      }
    )

    // PRICE
    gsap.fromTo(
      priceImgRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: priceDivRef.current,
          start: 'top 95%',
          end: 'top 45%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      priceDivRef.current,
      {
        opacity: 0,
        x: -170,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: priceDivRef.current,
          start: 'top 95%',
          end: 'top 45%',
          scrub: true,
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
            {topicsData.map((topic, index) => (
              <li key={topic.id}>
                <Topic
                  ref={el => {
                    topicsRefs.current[index] = el
                  }}
                >
                  <IconContainer>{topic.icon}</IconContainer>
                  <h2>{topic.title}</h2>
                  <p>{topic.text}</p>
                </Topic>
              </li>
            ))}
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
          <PriceContent ref={priceDivRef}>
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
          <img ref={priceImgRef} src="/images/tablet.svg" alt="" />
        </PriceWrapper>
      </PriceContainer>
    </HomeContainer>
  )
}
