import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { LIKS_CONTACT, LINKS_NAV_KEYS } from "../const/siteConfig";

import { Divider } from "@mui/material";

import Image from "../components/Image";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { SvgQrWp } from "../assets/svgs/svgsLogos";

const MotionSvgQrWp = motion.create(SvgQrWp);

const motion_variant_article = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const ns = "footer";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contacto"
      className="shadow-inner bg-gradient-to-b from-emerald-400 to-emerald-600 z-10 text-common"
    >
      <motion.div
        className="w-full max-w-[900px] p-4 flex flex-col gap-4 place-self-center"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center xs:flex-row gap-1 text-emerald-200 font-semibold text-5xl drop-shadow-sm drop-shadow-black/60 max-sm:self-center">
          <Image width={96} height={96} />
          <span>VerdeAve</span>
        </div>

        <Divider variant="middle" className="bg-neutral-300 sm:hidden" />

        <section className="flex flex-col-reverse max-sm:text-center sm:flex-row gap-4 sm:gap-6 sm:self-center">
          <motion.article variants={motion_variant_article}>
            <b>{t("sections", { ns: ns })}</b>

            <ul>
              {LINKS_NAV_KEYS.map(
                (id) =>
                  id !== "contacto" && (
                    <li key={id}>
                      <a
                        href={"#" + id}
                        target="_self"
                        title={t("go_to") + t(id, { ns: "links_nav" })}
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        {t(id, { ns: "links_nav" })}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </motion.article>

          <Divider variant="middle" className="bg-neutral-300 sm:hidden" />
          <Divider
            className="bg-neutral-300 hidden sm:block"
            orientation="vertical"
            flexItem
          />

          <motion.article variants={motion_variant_article}>
            <b>{t("contact", { ns: ns })}</b>

            <ul>
              {LIKS_CONTACT.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href || "#"}
                    target={item.href ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={"Ir a " + (item.title ?? item.label)}
                    className={
                      "inline-flex items-center gap-1" +
                      (item.href ? " hover:underline" : "")
                    }
                  >
                    <item.icon fontSize="small" />
                    {item.label}
                    {item.href && <OpenInNewIcon fontSize="inherit" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.article>

          <Divider variant="middle" className="bg-neutral-300 sm:hidden" />
          <Divider
            className="bg-neutral-300 hidden sm:block"
            orientation="vertical"
            flexItem
          />

          <motion.div
            className="self-center border-3 border-black rounded-lg p-1"
            variants={motion_variant_article}
          >
            <MotionSvgQrWp
              // @ts-ignore
              size={0.5}
              className="hover:fill-[url(#moveGrad)] transition-colors"
              // fill="url(#moveGrad)"

              // fill="url(#animatedGradient)"

              // style={{
              //   background:
              //     "linear-gradient(270deg, #58c2ed, #1b85dc, #60d0a0)",
              //   backgroundSize: "400% 400%",
              // }}
              // animate={{
              //   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              // }}
              // transition={{
              //   duration: 5,
              //   repeat: Infinity,
              //   ease: "linear",
              // }}

              // fill="url(#colorFog)"
              // filter="url(#fog)"
              // animate={{
              //   x: [0, -20, 20, 0],
              //   y: [0, 10, -10, 0],
              // }}
              // transition={{
              //   duration: 10,
              //   repeat: Infinity,
              //   ease: "easeInOut",
              // }}
            />
          </motion.div>
        </section>

        <Divider variant="middle" className="bg-neutral-300" />

        <p className="text-neutral-300 text-center">
          2025 - {t("design_for", { ns: ns })}
          <a
            href="https://github.com/CristianH577"
            target="_blank"
            rel="noopener noreferrer"
            title={t("go_to_creator_site", { ns: ns })}
            className="text-inherit hover:underline"
          >
            <span className="font-mono">©</span>
            VerdeAve <OpenInNewIcon fontSize="inherit" />
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
