<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 El Diagnóstico Empresarial, formación y Plan de mejora
    .titulo-segundo#t_1_1.mt-5
      .h4 1.1  Fundamentos de diagnóstico empresarial 
    .h4 El diagnóstico empresarial, formación y plan de mejora
    p En este componente formativo se abordará la etapa de Identificación de necesidades, la cual estará apoyada por la plataforma informática SoftWhere, como herramienta tecnológica y los formatos definidos en la metodología de extensionismo tecnológico para priorizar estas necesidades.
    .row.mt-5
      .col-12
        .cajon--azul.p-4.mb-5.mb-lg-0
          p Inicialmente, se valida con cada empresa el autodiagnóstico diseñado y aplicado por MinCIT, en el marco de la articulación del programa con MinTIC y SENA. En este autodiagnóstico se identifica, en la empresa, su grado de madurez digital para el nivel que le corresponda dentro de los procesos evaluados. Se validan, igualmente, las 15 variables iniciales del plan de mejora y las necesidades actuales de cada empresa en función de una relación entre alcance, tiempos y recursos de cada organización.
    p.mt-5 Posteriormente, se define un listado de necesidades, con la finalidad de desarrollar un match (cruce de datos) con el autodiagnóstico, en relación con la información suministrada por el empresario y las necesidades actuales de la empresa; luego se procede a elegir estratégicamente sobre qué dimensión, nivel y/o variables se espera trabajar, de cara al proceso de extensionismo tecnológico. Y, finalmente, se realiza un acuerdo con el empresario, en relación con los tiempos y estrategias para la coordinación efectiva entre las partes, que faciliten el cumplimiento de objetivos del plan de mejora y de sus necesidades.
    .row.justify-content-center.align-items-stretch.mt-5.p-5.bg-1
      .col-12
        img.img-t.img-a(src='@/assets/ilustraciones/img1.png', alt='') 

    .h4.mt-5 Fundamentos de diagnóstico empresarial
    p.mt-5 Colombia productiva (2019) del Ministerio de Industria, Comercio y Turismo (MinCIT) en articulación con la empresa SoftWhere, desarrollaron un autodiagnóstico empresarial de las MiPymes en las siguientes dimensiones:    
    .row.justify-content-center.align-items-center
      .col-11
        .row.mt-5
          .col-md-6.col-lg
            .tarjeta-Avatar
              img(src='@/assets/ilustraciones/img3.svg' alt='AvatarTop')
              .tarjeta.tarjeta--morada.tarjeta-avatar.p-4
                .h4.text-tarjeta-avatar.text-center Implementación digital
                p.text-tarjeta-avatar.text-center.px-4.pb-4 Mide la inversión en iniciativas tecnológicas para cambiar la gestión operativa de la empresa (relación con clientes, operaciones, modelo de negocio). Muchas organizaciones están invirtiendo en esta dimensión, pero los problemas se originan, en algunos casos, por la falta de una estrategia coordinada de la organización.


          .col-md-6.col-lg
            .tarjeta-Avatar
              img(src='@/assets/ilustraciones/img4.svg' alt='AvatarTop')
              .tarjeta.tarjeta--morada.tarjeta-avatar.p-4
                .h4.text-tarjeta-avatar.text-center Gestión de la digitalización
                p.text-tarjeta-avatar.text-center.px-4.pb-4 Las organizaciones situadas en esta dimensión están creando internamente las capacidades de liderazgo necesarias para transformar digitalmente y de manera integral toda la organización. 

    .row.justify-content-center.align-items-center.mt-5
      .col-10
        img.img-t.img-a(src='@/assets/ilustraciones/img5.svg', alt='') 

    .titulo-segundo#t_1_2.mt-5
      .h4 1.2 Aplicación de herramienta de autodiagnóstico de entrada y de salida 

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p En este autodiagnóstico se identifica a la empresa en su grado de madurez digital para el nivel que le corresponda dentro de los procesos evaluados. Se validan, igualmente, las 15 variables iniciales del Plan de Mejora y las necesidades actuales de cada empresa en función de una relación entre alcance, tiempos y recursos de cada organización.
        p.mt-3 #[b Para consultar más información acerca del tema aplicación de herramientas de autodiagnóstico, acceder al siguiente material complementario de libre acceso:]

        a.anexo.mt-4(:href="('https://www.youtube.com/watch?v=shhELBfknBs&t=1361s')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-enlace.svg")
          .anexo__texto
            p Academia de extensionismo tecnológico. 
            p.mt-2 Parte 1. Semana de transferencia de conocimientos nuevos colaboradores. 

        a.anexo.mt-3(:href="('https://www.youtube.com/watch?v=Q1NywhRPbqQ&t=875s')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-enlace.svg")
          .anexo__texto
            p Academia de extensionismo tecnológico. 
            p.mt-2 Parte 2. Semana de transferencia de conocimientos nuevos colaboradores. 

      .col-12.col-md-4   
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img6.png', alt='Texto que describa la imagen')

    p.mt-5 Cabe destacar que, frente a las dimensiones planteadas, se encuentra que la organización de acuerdo con la estrategia de transformación digital se puede enmarcar en #[b cuatro (4) niveles de madurez] que definen su estado actual, y se presentan a continuación: 
    
    .row.justify-content-center.align-items-stretch.mt-5
      .col-12.col-md-6.m-bg-1.p-5
        img.img-t(src='@/assets/ilustraciones/img7.svg', alt='')
        p.mt-2 #[b Nivel 1. Principiante digital]
        p.mt-3 Con base en Colombia Productiva (2019), son “organizaciones que han experimentado e implantado soluciones tecnológicas, y aunque algunas de ellas aportan valor al negocio la mayoría no lo hace. Falta una estrategia coordinada y visión de transformación integral” (s. p.).

        .row.mt-4
          .col-2
            .sub-ecored
              h2.mb-0 
        button.mt-0.boton.boton--b(type='button' data-bs-toggle='modal' data-bs-target='#exampleModal1')
          | LEER MAS                  
        #exampleModal1.modal.fade(tabindex='-1' aria-labelledby='exampleModalLabel1' aria-hidden='true')
          .modal-dialog.modal-dialog-centered.modal-xl
            .modal-content
              .modal-header
                h5#exampleModalLabel1.modal-title.text-black Nivel 1. Principiante digital
              .modal-body
                p En este nivel se encuentran las empresas que incorporan soluciones tecnológicas como soporte y mejora de sus procesos dentro de la cadena de valor, aunque sin una estrategia coordinada que permita asignar prioridades en su visión de transformación digital frente a las dimensiones de los niveles de digitalización de los procesos. Además, se puede observar que existe una baja gestión de la digitalización e implementación digital.

                .row.mt-5
                  .col-12
                    .cajon--azul.p-4.mb-5.mb-lg-0
                      p Así mismo, en este nivel se encuentran aquellas empresas que requieren o tienen una inversión financiera reducida, en donde su equipamiento e infraestructura tecnológica se restringe hacia el uso de equipos de cómputo y acceso a internet. Además, las aplicaciones informáticas allí empleadas no requieren de un conocimiento especializado.  

                .row.justify-content-center.align-items-center.mt-5
                  .col
                    p En estas organizaciones, el empleo de las tecnologías informáticas se basa en tareas de coordinación elemental, gestión básica y administración local que se ven directamente reflejadas en la baja estandarización y la eficiencia en los procesos y recursos. Por lo tanto, las herramientas y aplicaciones empleadas se centran en el manejo inicial de correo electrónico, suites ofimáticas, servicios bancarios privados y del sector público, entre otros.
                    p.mt-3 Finalmente, las empresas o empresarios pueden tener tecnologías del tipo software (programas) en computadores de escritorio o aplicaciones de celular, sin embargo, no necesariamente deben saberlas utilizar, ni tampoco tener información digitalizada ni procesada que les sirva a los intereses económicos de sus proyectos.
                  .col-auto
                    img.img-t(src='@/assets/ilustraciones/img11.png', alt='')

              .modal-footer
                button.btn.boton--b(type='button' data-bs-dismiss='modal') cerrar                  

      .col-12.col-md-6.m-bg-2.p-5
        img.img-t(src='@/assets/ilustraciones/img8.svg', alt='')
        p.mt-2 #[b Nivel 2. Gestor digital]
        p.mt-3 Según lo establece Colombia Productiva (2019): las organizaciones motivadas para provocar el cambio digital, pero sin una estrategia basada en el conocimiento sobre cómo esta transformación puede y debe aportar valor al negocio. Estas organizaciones, a pesar de encontrarse en situaciones de madurez digital en algunas de sus unidades de negocio, carecen aún de una estrategia global como organización (s. p.).

        .row.mt-4
          .col-2
            .sub-ecored
              h2.mb-0 
        button.mt-0.boton.boton--b(type='button' data-bs-toggle='modal' data-bs-target='#exampleModal2')
          | LEER MAS                  
        #exampleModal2.modal.fade(tabindex='-2' aria-labelledby='exampleModalLabel2' aria-hidden='true')
          .modal-dialog.modal-dialog-centered.modal-xl
            .modal-content
              .modal-header
                h5#exampleModalLabel2.modal-title.text-black Nivel 2. Gestor digital
              .modal-body
                p Para este nivel, se permite enmarcar empresas que se sitúan con un grado de madurez digital en algunas de sus unidades de negocio, sin embargo, carecen de conocimiento acerca de una estrategia en transformación digital que puede y debe aportar valor al modelo de negocio.

                .row.mt-5
                  .col-12
                    .cajon--azul.p-4.mb-5.mb-lg-0
                      p Es así como en las dimensiones de los niveles de digitalización de procesos se requiere tener una alta gestión de la digitalización y una baja implementación digital; entonces, aquí las empresas han iniciado un proceso de digitalización, implementación y apropiación básica de las tecnologías de la información y las comunicaciones y cuentan con plataforma web, bases de datos básicas o software (propio o alquilado) para el desarrollo de sus actividades presentando niveles operativos y de coordinación.

                .row.justify-content-center.align-items-center.mt-5
                  .col
                    p Es preciso señalar que las empresas aquí se encuentran en un momento de exploración, autoconocimiento y desarrollo de capacidades organizacionales que les permita, a mediano y largo plazo, considerar el desarrollo de sus propios programas y aplicaciones de acuerdo con sus requerimientos.
                    p.mt-3 En resumen, las herramientas tecnológicas representan para ellos la posibilidad de modificar los procesos pasando de datos a información, encaminados a facilitar la toma de decisiones y la articulación inicial de las áreas estratégicas de la empresa, lo cual implica empezar a pensar sobre la estandarización de los procesos que guíen y soporten la transformación de la organización. 
                  .col-auto
                    img.img-t(src='@/assets/ilustraciones/img12.png', alt='')
              .modal-footer
                button.btn.boton--b(type='button' data-bs-dismiss='modal') cerrar                  

    .row.justify-content-center.align-items-stretch
      .col-12.col-md-6.m-bg-3.p-5
        img.img-t(src='@/assets/ilustraciones/img9.svg', alt='')
        p.mt-2 #[b Nivel 3. Ejecutivo digital]
        p.mt-3 Desde Colombia Productiva (2019) se señala que: las organizaciones que ponen la prudencia por delante de la innovación, que entienden la importancia de la estrategia, de la coordinación, de la gobernanza y de la cultura organizacional a la hora de abordar un proceso de transformación. Sin embargo, son escépticos sobre el valor de lo digital en estos procesos, aunque están dispuestos a invertir en cambio digital. Su actitud excesivamente cuidadosa de abordar estos temas les hace perder oportunidades frente a otras organizaciones más arriesgadas (s. p.).

        .row.mt-4
          .col-2
            .sub-ecored
              h2.mb-0 
        button.mt-0.boton.boton--b(type='button' data-bs-toggle='modal' data-bs-target='#exampleModal3')
          | LEER MAS                  
        #exampleModal3.modal.fade(tabindex='-3' aria-labelledby='exampleModalLabel3' aria-hidden='true')
          .modal-dialog.modal-dialog-centered.modal-xl
            .modal-content
              .modal-header
                h5#exampleModalLabel3.modal-title.text-black Nivel 3. Ejecutivo digital
              .modal-body
                p Del mismo modo, y en cuanto a las dimensiones de los niveles de digitalización de procesos, se percibe que tener una baja gestión de la digitalización y una alta implementación digital, permiten detectar en la organización ciertos niveles de digitalización, procesamiento y coordinación, encaminados hacia el cumplimiento de objetivos de gestión pasando de datos a información y de estos a estrategias de resultados.

                .row.justify-content-center.align-items-center.mt-5
                  .col
                    p En este nivel, entonces, se evidencia la implementación de sistemas informáticos y de procesos que integran las áreas de la organización, tales como Enterprise Resource Planning (ERP), los cuales permiten entender la existencia de una coordinación entre estrategia e implementación de los modelos transaccionales con la estructura, con relación a la cultura tecnológica de la organización, evidenciando la utilización más coordinada de plataformas de comercialización y ventas en línea.
                    p.mt-3 Por esta razón, las empresas pueden tener modelos que son mediados a través de estrategias de comercio online y de transacciones vía Customer Relationship Management (CRM) modulares con estrategias sincrónicas de organización de datos y modelos de negocio contingentes.
                  .col-auto
                    img.img-t(src='@/assets/ilustraciones/img13.png', alt='')
              .modal-footer
                button.btn.boton--b(type='button' data-bs-dismiss='modal') cerrar                  

      .col-12.col-md-6.m-bg-4.p-5
        img.img-t(src='@/assets/ilustraciones/img10.svg', alt='')
        p.mt-2 #[b Nivel 4. Transformador  digital]
        p.mt-3 Siguiendo a Colombia Productiva (2019), se establece que: las organizaciones que saben cómo aportar valor al negocio desde la transformación digital, combinan visión y gobernanza con el compromiso por la inversión y el crecimiento empresarial. Gracias a la visión global y a la integración de toda la organización en la estrategia de transformación digital logran desarrollar una cultura digital que les permite incorporar nuevos cambios a su modelo de negocio (s. p.).

        .row.mt-4
          .col-2
            .sub-ecored
              h2.mb-0 
        button.mt-0.boton.boton--b(type='button' data-bs-toggle='modal' data-bs-target='#exampleModal4')
          | LEER MAS                  
        #exampleModal4.modal.fade.mt-4(tabindex='-4' aria-labelledby='exampleModalLabel4' aria-hidden='true')
          .modal-dialog.modal-dialog-centered.modal-xl
            .modal-content
              .modal-header
                h5#exampleModalLabel4.modal-title.text-black Nivel 4. Transformador digital
              .modal-body.px-5
                p Así mismo, las dimensiones de los niveles de digitalización de procesos muestran tener una alta gestión de la digitalización y también una elevada implementación digital; entonces, aquí las empresas se presentan de manera clara, coherente, en sinergia con los procesos de digitalización, procesamiento, coordinación, gestión y estrategia diferenciadas empleando de manera intensiva y especializada las Tecnologías de Información y las Comunicaciones (TIC).

                .row.mt-5
                  .col-12
                    .cajon--azul.p-4.mb-5.mb-lg-0
                      p Adicionalmente, las empresas presentan niveles de organización tecnológica que facilitan la adaptación recurrente de su modelo de negocio a las adversidades económicas y sociales, generando alternativas consistentes y estratégicas, permitiendo el desarrollo de acciones impregnadas de usabilidad inteligente de sus tecnologías con recursos propios o colaborativos, con aliados de su sector y su propia cadena de valor, es decir la presencialidad asistida por la tecnología como herramienta de transformación digital.

                .row.justify-content-center.align-items-center.mt-5
                  .col-8
                    .h6.mb-4 Dentro de las tecnologías con las que cuentan las empresas de este nivel se presentan:
                    .row.justify-content-center.align-items-center
                      .col-10                    
                        .list
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top ERP (Enterprise Resource Planning).
                        .list.mt-3
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top CRM (Customer Relationship Management).
                        .list.mt-3
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top BPM (Business Procesas Management).
                        .list.mt-3
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top CMS (Content Management System). 
                        .list.mt-3
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top BI (Business Intelligence).
                        .list.mt-3
                          .list__item
                              .list__item__icon
                                  img.img-a(src="@/assets/ilustraciones/v1.svg").img-fluid  
                          .list__txt    
                              p.m-top Centro de TI. 

                  .col-auto
                    img.img-t(src='@/assets/ilustraciones/img14.png', alt='')
              .modal-footer
                button.btn.boton--b(type='button' data-bs-dismiss='modal') cerrar                          

    .titulo-segundo#t_1_3.my-5
      .h4 1.3 Análisis e interpretación de información 
    .imagen-titulo--izq
      figure
        img(src='@/assets/ilustraciones/img15.png', alt='Texto que describa la imagen')
    .tarjeta.tarjeta--amarilla.p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 El diagnóstico empresarial,formación y plan de mejora
              p.text-small Análisis e interpretación de información
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/CF2_Extencionismo_Graficos_analisis.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download        
    p.mt-5 Una vez se haya realizado la identificación de las dimensiones y niveles, se deben tener en cuenta los siguientes tipos de análisis: 
    .row.justify-content-center.align-items-center.mt-5
      .col-10 
        .list
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Uso de las tecnologías de la información visto desde áreas funcionales de la empresa: estrategia, finanzas, gestión, comercial, operaciones y gestión tecnológica. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Implementación de las tecnologías de la información visto desde las perspectivas: financiera, clientes, procesos internos, aprendizaje. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Apropiación de tecnologías de información visto desde grupos de interés: empleados, directivos, sociedad civil, proveedores, clientes. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Definición de tecnologías de información visto desde el modelo de negocio. 
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Un análisis sobre el uso de tecnologías de información visto desde la cadena de valor: logística interna, operaciones, logística externa, marketing y ventas, servicio posventa.
        .list.mt-3
          .list__item
              .list__item__icon
                  img.img-a(src="@/assets/ilustraciones/v2.svg").img-fluid  
          .list__txt    
              p.m-top Plan de mejora con recomendaciones para su transformación digital, sobre 15 variables (estrategia, gestión directivos, relación con clientes, servicios posventa, clientes operaciones, logística externa, financiera, estructura de costos, flujo de ingresos, compras, gestión de tecnología, colaboradores, sociedad civil).

    .bloque-texto-a.p-4.p-md-5.my-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h4.mb-0.text-white Se determina, así, un listado de necesidades, con la finalidad de desarrollar un match (cruce de datos), 
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p con el autodiagnóstico, con relación, a la información suministrada por el empresario en el autodiagnóstico y las necesidades actuales de la empresa, se procede a elegir estratégicamente, sobre qué dimensión, nivel y/o variables se espera trabajar de cara al proceso de extensionismo tecnológico; posteriormente, se realiza un acuerdo con el empresario en relación con los tiempos y estrategias para la coordinación efectiva entre las partes que faciliten el cumplimiento de objetivos del plan de mejora y de sus necesidades.

    .titulo-segundo#t_1_4.my-5
      .h4 1.4 Planteamiento de indicadores

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p Con el fin de hacer seguimiento y medir el impacto del proceso de asistencia técnica en las MiPymes colombianas, se estructuró una batería de indicadores que impactan directamente con las dimensiones del objetivo principal de la estrategia. Los indicadores definidos se medirán en la implementación de los planes de mejora. 

        p.my-3 Por cada ciclo de acompañamiento se medirán dos (2) indicadores fijos, los cuales serán evaluados en el plan de mejora y verificados con el crecimiento de los indicadores y avance en el nivel de madurez digital que se obtienen en el autodiagnóstico de la plataforma SoftWhere.

        p En cada intervención de 40 horas, la estrategia busca alcanzar un crecimiento de, al menos, el 5% en cada indicador fijo establecido en el plan de mejora. En común acuerdo con cada empresa el consultor o extensionista podrá fijar otros indicadores que permitan soportar el impacto de las acciones planeadas en la intervención.

      .col-12.col-md-4
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img16.png', alt='Texto que describa la imagen')      
          .imagen-titulo__titulo
            .h4.m-0.text-white Planteamiento de indicadores

    .titulo-segundo#t_1_5.my-5
      .h4 1.5 Identifica necesidades de formación de acuerdo con el análisis de la información

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-4
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img17.png', alt='Texto que describa la imagen')      
          .imagen-titulo__titulo
            .h4.m-0.text-white Necesidades de formación 

      .col-12.col-md-8
        p En esta etapa es importante concertar con el empresario las necesidades de formación identificadas en los colaboradores de la empresa y que puedan ser solucionadas con cursos de formación complementaria, o itinerarios de formación LinkedIn y empresario digital. 

        p.mt-3 Las competencias para fortalecer que se definen de acuerdo con los ciclos se enmarcan en dos plataformas. Con esta iniciativa el talento humano de las micro, pequeñas y medianas empresas del país podrán certificarse en temas clave como comercio electrónico, productividad y operaciones, administración, planeación estratégica y toma de decisiones.

    .titulo-segundo#t_1_6.my-5
      .h4 1.6 Plan de mejora de acuerdo con el análisis de la información

    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-md-8
        p Tomando como partida el autodiagnóstico y las necesidades previamente validadas, se procede a revisar con el empresario el plan de mejora propuesto y sus variables, estableciendo la actual línea base o punto de partida.

        p.my-3 Igualmente, se corrobora con el empresario el nivel de madurez tecnológica en las dos (2) dimensiones a través de la validación (pregunta-respuesta, observación, revisión de información) y se verifica que la empresa se encuentre en un proceso de usabilidad tecnológica (existencia de tecnología, adaptación y uso estratégico de la misma en los procesos internos de la compañía) según su nivel de madurez e igualmente con las 15 variables y sus perspectivas. 

        p Adicionalmente, se debe incluir en esta etapa la definición de las áreas específicas en las cuales se realizará el acompañamiento por parte del programa de extensionismo y cuáles serían las capacitaciones certificadas en MinTIC y SENA que las empresas realizarán con base en su nivel de madurez. 


      .col-12.col-md-4
        .imagen-titulo--izq
          figure.my-3
            img(src='@/assets/ilustraciones/img18.png', alt='Texto que describa la imagen')      
          .imagen-titulo__titulo
            .h4.m-0.text-white Plan de mejora
    .row.mt-5
      .col-12
        .cajon--rojo.p-4
          p Así mismo, se define estratégicamente el foco (área, proceso, personas) y tiempos de trabajo enmarcados en las variables del autodiagnóstico tales como estrategia, gestión, directivos, relación con clientes, servicios postventa, clientes, operaciones, logística externa, financiera, estructura de costos, flujo de ingresos, compras, gestión de tecnología, colaboradores y sociedad civil.  
    p.mt-5 Por consiguiente, de esta forma se definirán las variables sobre las que se implementará el plan de mejora que, en su totalidad, incluirá el autodiagnóstico previamente desarrollado, las necesidades identificadas, la línea base, la proyección de mejora sobre esta línea base, las actividades a desarrollar, las formaciones/capacitaciones sugeridas, el tiempo de implementación proyectado y las tecnologías planteadas para dar cumplimiento a los objetivos a alcanzar con las empresas.

    .tooltip
      | Hover over me
      span.tooltiptext Tooltip text

</template>

<script>
import { mapActions } from 'vuex'
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
    ],
    datosPasosA: [
      {
        titulo: 'Dressed for Error',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Before the Fury',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Khans Tribute',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
      {
        titulo: 'Secret of the Quiet Stranger',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.',
      },
    ],
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto:
          'Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original.',
        imagen: require('@/assets/template/img-placeholder.svg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.increment()
    setTimeout(() => {
      this.decrease()
    }, 3000)
  },
  methods: {
    ...mapActions(['increment', 'decrease']),
  },
}
</script>

<style lang="sass" scoped></style>
