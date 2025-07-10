import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useConfigs } from "../../hooks/useConfigs";

import { IconButton, Menu, MenuItem } from "@mui/material";

import ThemeSwitch from "./ThemeSwitch";

import SettingsIcon from "@mui/icons-material/Settings";

import { SVGFlagARG, SVGFlagUSA } from "../../assets/svgs/svgsFlags.tsx";

const flags = {
  es: SVGFlagARG,
  en: SVGFlagUSA,
};

const ns = "menu_nav";
export default function MenuConfigs() {
  const { t } = useTranslation();
  const configs = useConfigs();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const SVGFlag = flags[configs.value.lang as keyof typeof flags];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="configs-button"
        aria-controls={open ? t("configs_label", { ns: ns }) : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        title={t("configs_label", { ns: ns })}
        onClick={handleClick}
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>

      <Menu
        id="configs-menu"
        anchorEl={anchorEl}
        open={open}
        slotProps={{
          list: {
            "aria-labelledby": "configs-button",
          },
        }}
        onClose={handleClose}
      >
        <MenuItem
          title={t("swith-theme", { ns: ns })}
          onClick={configs.switch.theme}
        >
          <ThemeSwitch isSelected={configs.value.theme} />
        </MenuItem>
        <MenuItem
          title={t("swith-lang", { ns: ns })}
          className="uppercase !font-bold !justify-around"
          onClick={configs.switch.lang}
        >
          {configs.value.lang}
          <SVGFlag width={20} />
        </MenuItem>

        <MenuItem
          title={t("swith-text", { ns: ns })}
          className="uppercase !font-bold !justify-center"
          onClick={configs.switch.font}
        >
          {configs.value.font}
        </MenuItem>
      </Menu>
    </div>
  );
}
