import React from 'react'
import Image from 'next/image'
import profile from '../../../public/profile.jpg'

export default function Work() {
  return (
    <div className={`w-full h-auto  block sm:flex items-center justify-center text-white`}>
    <div className="w-1/3 h-full flex justify-center items-center">
        <div className="relative overflow-hidden rounded-full h-96 w-96 hover:w-[30rem] hover:h-[30rem] transition-all ease-in duration-500 flex justify-center items-center">
            <Image className="object-cover h-96 w-96 hover:w-[28rem] hover:h-[28rem] transition-all ease-in duration-700" src={profile} alt="" />
        </div>
    </div>
    <div className={`w-2/3 h-full flex justify-start items-center `}>
        {/* <h1 className=''>Olá, Meu nome é Mateus</h1> */}
        <div className="container">
            <h1 className="inline-block box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-xl my-5">
                Olá, Meu nome é Mateus
            </h1>
            <p className='my-4 break-after-column'>Sou um desenvolvedor de software com vasta experiência em diversas tecnologias, incluindo .NET, SQL Server, ReactJS e Node.js. Tenho uma sólida trajetória no desenvolvimento de sistemas complexos, desde a concepção e desenvolvimento do zero até a implementação de microserviços.</p>
            <p className='my-4 break-after-column'>Ao longo da minha carreira, destaco meu papel em projetos-chave, como o desenvolvimento de plataformas MES, onde fui responsável pela concepção e implementação de módulos essenciais. Entre as minhas realizações, estão o monitoramento detalhado do progresso das ordens de produção, a integração com IoT para controle de inventário e a criação de relatórios e análises detalhadas que suportam decisões estratégicas.</p>
            <p className='my-4 break-after-column'>Também participei ativamente da integração de sistemas com ERPs por meio de web services (REST e SOAP), demonstrando habilidades robustas na criação de soluções escaláveis e eficientes. Minha experiência inclui ainda o desenvolvimento de microserviços que melhoram a arquitetura dos sistemas e a eficiência operacional.</p>
            <p className='my-4 break-after-column'>Sou apaixonado por desenvolver soluções que otimizem processos industriais e aumentem a produtividade, sempre com foco na inovação e excelência técnica.</p>

        </div>

    </div>
    </div>
  )
}
