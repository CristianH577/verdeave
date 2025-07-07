import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@mui/material";

import TabPanelServicio from "./Servicios/TabPanelServicio";

const items = [
  {
    id: "web",
    label: "Diseño web",
    textContent: (
      <p>
        Una sitio web es una gran forma de mostrar contenido y llegar al publico
        teniendo una presencia mas precisa en internet ya que facilita a los
        motores de búsqueda enlazar a los usuarios con el contenido; además de
        dar una imagen mas profesional y confiable.
      </p>
    ),
    listas: [
      {
        label: "Landing page",
        items: [
          "Diseño responsive",
          "Carga rápida",
          "Imágenes optimizadas",
          "Aplicación de SEO",
          "Revisión ortográfica",
          "Paleta de colores personalizada",
          "Estructura modulada",
          "Código simple de entender",
          "Animaciones básicas",
          "Hosting gratuito",
          "Logo básico",
          "Prevención de errores",
        ],
      },
      {
        label: "+Plus",
        items: [
          "Paginas adicionales",
          "Diseño personalizado",
          "Carga rápida",
          "Imágenes optimizadas",
          "Revisión ortográfica",
          "Paleta de colores personalizada",
          "Animaciones",
          "Diseño grafico",
          "Dominio personalizado",
          "Animaciones avanzadas",
          "Modo oscuro",
          "Multilenguaje/internacionalización",
        ],
      },
      {
        label: "Precio",
        items: [
          "Landing page: $100.000",
          "Adicional si precisa algo mas de la lista de +Plus",
          "Adelanto de $10.000 y cancelación al finalizar",
        ],
      },
    ],
  },
  {
    id: "catalogo",
    label: "Catalogo Online",
    textContent: (
      <>
        <p>
          Si busca algo menos complicado que una tienda online y una web es
          demasiado, un catalogo online es una opción sencilla y rápida para
          mostrar productos y servicios.
        </p>
        <p>
          Con esto facilita que los clientes sepan lo que se ofrece y encuentren
          lo que quieren si tiene gran variedad de artículos; además de aparecer
          en la lista de los motores de búsqueda.
        </p>
      </>
    ),
    listas: [
      {
        label: "Básico",
        items: [
          "Diseño responsive",
          "Sistema de búsqueda",
          "Carrito de compras",
          "Aplicación de SEO",
          "Despliegue rápido",
          "Color personalizado",
          "Inclusión de redes",
          "Link a WhatsApp para concluir la venta",
          "Hosting gratuito",
          "Artículos ilimitados",
        ],
      },
      {
        label: "+Plus",
        items: [
          "Diseño personalizado",
          "Carga rápida",
          "Imágenes optimizadas",
          "Revisión ortográfica",
          "Paleta de colores personalizada",
          "Animaciones",
          "Diseño grafico",
          "Actualización/modificación posterior",
          "Dominio personalizado",
          "Sección de preguntas frecuentes",
        ],
      },
      {
        label: "No incluye",
        items: [
          "Sitio dinámico(la web es estática)",
          "Sistema de pagos",
          "Sistema de administración",
        ],
      },
      {
        label: "Que necesita?",
        items: [
          "Rellenar un Excel con los datos de los artículos",
          "Una carpeta con las imágenes de los artículos",
          "Los datos del negocio: nombre, dirección, redes, horarios, etc.",
          "Esperar 1 a 3 días para configurar el catalogo",
        ],
      },
      {
        label: "Precio",
        items: [
          "Basico final: $40.000",
          "Adelanto de $5.000 y cancelación al finalizar",
          "Adicional si precisa algo mas de la lista de +Plus",
        ],
      },
    ],
  },
  {
    id: "tienda",
    label: "Tienda Online",
    textContent: (
      <>
        <p>
          Si quiere una web dedicada al comercio que pueda administrar y
          controlar, lo mejor es utilizar un servicio ya existente que solo
          implique personalizar y cargar los artículos(Empretienda, Tienda Nube,
          Mercado Shops,Woo Commerce, etc.).
        </p>
        <p>
          A diferencia de una web desde cero con esto ahorra el costo de la
          estructura de la web, diseño de base de datos, costo de servidores
          personales y mas; y a diferencia del catalogo online, aquí puede
          administrar el contenido directamente. Además los servicios suelen
          incluir un sistema de pagos, pedidos, historial, etc.
        </p>
      </>
    ),
    listas: [
      {
        label: "Básico",
        items: [
          "Creación de cuenta",
          "Carga de artículos(hasta 50)",
          "Diseño básico de paginas",
          "Carga de información del negocio",
          "Inclusión de redes",
          "Tutorial básico",
          "Sección de preguntas frecuentes",
        ],
      },
      {
        label: "+Plus",
        items: [
          "Diseño personalizado",
          "Carga rápida",
          "Imágenes optimizadas",
          "Revisión ortográfica",
          "Paleta de colores personalizada",
          "Animaciones",
          "Diseño grafico",
          "Dominio personalizado",
        ],
      },
      {
        label: "Que necesita?",
        items: [
          "Los datos de los artículos: nombre, precio, categoría, etc.",
          "Imágenes de los artículos",
          "Los datos del negocio: nombre, dirección, redes, horarios, etc.",
          "Esperar 1 a 5 días para configurar la pagina",
        ],
      },
      {
        label: "Precio",
        items: [
          "Básico: $50.000",
          "Adelanto de $10.000 y cancelación al finalizar",
          "Adicional si precisa algo mas de la lista de +Plus",
          "Tenga en cuenta que las tiendas tienen un coste mensual aparte",
        ],
      },
    ],
  },
];

export default function Servicios() {
  const [value, setValue] = useState(0);

  return (
    <section id="servicios" className="view-section">
      <span className="text-sm text-neutral-300 mb-1">
        *Los precios pueden variar
      </span>

      <article className="border-b border-neutral-400 overflow-x-auto pb-1">
        <motion.ul
          role="tabs-wrapper"
          aria-label="pestañas de servicios"
          className="flex w-fit relative"
        >
          {items.map((item, i) => (
            <li key={i}>
              <Button
                color="inherit"
                size="large"
                role="tab"
                data-selected={i === value}
                className="whitespace-nowrap data-[selected=true]:!font-semibold data-[selected=true]:text-shadow-md text-shadow-black/30"
                onClick={() => setValue(i)}
              >
                {value === i && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute right-0 bottom-0 rounded-sm w-full h-full bg-gradient-to-t from-emerald-600 to-emerald-400"
                  />
                )}
                <span className="z-10">{item.label}</span>
              </Button>
            </li>
          ))}
        </motion.ul>
      </article>

      <AnimatePresence mode="wait">
        <motion.article
          key={value}
          role="tabpanel"
          layoutId="content"
          className="py-4 sm:px-4"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <TabPanelServicio {...items[value]} />
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
