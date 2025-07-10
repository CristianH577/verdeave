import { useEffect, useState } from "react";

import { FONTS_VALUES } from "../const/siteConfig";

import { useColorScheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

type TypeConfigs = {
  theme: string;
  font: string;
  lang: string;
};
type TypeFontValue = keyof typeof FONTS_VALUES;

export function useConfigs() {
  const { setMode } = useColorScheme();
  const { i18n } = useTranslation();
  const [configs, setConfigs] = useState<TypeConfigs>({
    theme: "light",
    font: "md",
    lang: "es",
  });

  const handleSet = (configs_: TypeConfigs) => {
    if (configs_.theme !== configs.theme) handleChangeTheme(configs_);
    if (configs_.font !== configs.font) handleChangeFont(configs_);
    if (configs_.lang !== configs.lang) handleChangeLang(configs_);

    setConfigs(configs_);
  };

  const handleChangeTheme = (configs_: TypeConfigs) => {
    setMode(configs_.theme as "system" | "light" | "dark");

    localStorage.setItem("theme", configs_.theme);
  };

  const handleChangeFont = (configs_: TypeConfigs) => {
    const font_values = FONTS_VALUES[configs_.font as TypeFontValue];

    Object.entries(font_values).forEach(([key, val]) => {
      document.documentElement.style.setProperty("--text-" + key, val);
    });

    localStorage.setItem("font", configs_.font);
  };

  const handleChangeLang = (configs_: TypeConfigs) => {
    i18n.changeLanguage(configs_.lang);

    localStorage.setItem("lang", configs_.lang);
  };

  // swiths--------------------------
  const switchTheme = () => {
    const configs_ = structuredClone(configs);
    const theme_ = configs.theme === "light" ? "dark" : "light";

    configs_.theme = theme_;
    handleSet(configs_);
  };

  const switchFont = () => {
    const configs_ = structuredClone(configs);

    const fonts_keys = Object.keys(FONTS_VALUES);

    const key_inx_current = fonts_keys.findIndex((key) => key === configs.font);

    let key_inx_ = key_inx_current + 1;
    if (key_inx_ > fonts_keys.length - 1) key_inx_ = 0;
    const font_key_ = fonts_keys[key_inx_];

    configs_.font = font_key_;
    handleSet(configs_);
  };

  const switchLang = () => {
    const configs_ = structuredClone(configs);
    const lang_ = configs.lang === "es" ? "en" : "es";

    configs_.lang = lang_;
    handleSet(configs_);
  };

  useEffect(() => {
    const configs_ = structuredClone(configs);

    const theme_ = localStorage.getItem("theme");
    if (theme_ && theme_ !== "light") configs_.theme = theme_;

    const font_ = localStorage.getItem("font");
    if (font_ && font_ !== "md") configs_.font = font_;

    const lang_ = localStorage.getItem("lang");
    if (lang_ && lang_ !== "es") configs_.lang = lang_;

    handleSet(configs_);
  }, []);

  return {
    value: configs,
    switch: {
      theme: switchTheme,
      font: switchFont,
      lang: switchLang,
    },
  };
}
